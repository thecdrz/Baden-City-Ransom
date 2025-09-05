import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const http = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('BCR Relay OK');
});

const wss = new WebSocketServer({ server: http });

// Rooms keyed by roomId -> { host: ws, clients: Set<ws> }
const rooms = new Map();

function send(ws, type, payload) {
  try { ws.send(JSON.stringify({ t: type, ...payload })); } catch { /* ignore */ }
}

function broadcast(set, msg) {
  const data = JSON.stringify(msg);
  for (const ws of set) { try { ws.send(data); } catch {} }
}

wss.on('connection', (ws) => {
  ws._roomId = null;
  ws._role = null; // 'host' | 'client'

  ws.on('message', (buf) => {
    let msg = null; try { msg = JSON.parse(buf.toString()); } catch {}
    if (!msg || !msg.t) return;

    if (msg.t === 'join') {
      // { t:'join', room, as }  as: 'host' | 'client'
      const roomId = String(msg.room || '').slice(0, 40) || 'default';
      const role = msg.as === 'host' ? 'host' : 'client';
      let room = rooms.get(roomId);
      if (!room) { room = { host: null, clients: new Set() }; rooms.set(roomId, room); }
      if (role === 'host') {
        if (room.host && room.host !== ws) { send(ws, 'error', { error: 'host_exists' }); return; }
        room.host = ws; ws._role = 'host'; ws._roomId = roomId;
        send(ws, 'joined', { role: 'host', room: roomId });
        // Inform clients that a host is ready
        broadcast(room.clients, { t: 'host_ready' });
        // If clients were already in the room, let host know at least one is present
        if (room.clients && room.clients.size > 0) {
          // Send one client_join notification; host uses it as presence signal
          send(ws, 'client_join', {});
        }
      } else {
        room.clients.add(ws); ws._role = 'client'; ws._roomId = roomId;
        send(ws, 'joined', { role: 'client', room: roomId });
        // Notify host a client joined
        if (room.host) send(room.host, 'client_join', {});
      }
      return;
    }

    // Relay control/state
    const room = rooms.get(ws._roomId || '');
    if (!room) return;

    if (ws._role === 'client' && msg.t === 'input') {
      // forward inputs to host
      if (room.host) {
        try { room.host.send(JSON.stringify({ t: 'input', from: 'p2', data: msg.data||{} })); } catch {}
      }
      return;
    }

    if (ws._role === 'host' && msg.t === 'state') {
      // host-authoritative state snapshot -> broadcast to clients
      broadcast(room.clients, { t: 'state', data: msg.data || {} });
      return;
    }

    if (ws._role === 'host' && msg.t === 'start') {
      // Host requests a synchronized start. Echo to host and broadcast to clients.
      const payload = { t: 'start', data: msg.data || {} };
      try { ws.send(JSON.stringify(payload)); } catch {}
      broadcast(room.clients, payload);
      return;
    }

    if (ws._role === 'host' && msg.t === 'story') {
      // Relay host-authoritative story actions (e.g., finish/advance) to clients
      const payload = { t: 'story', data: msg.data || {} };
      // Echo back to host is not necessary, but harmless; clients act on it
      try { ws.send(JSON.stringify(payload)); } catch {}
      broadcast(room.clients, payload);
      return;
    }
  });

  ws.on('close', () => {
    const room = rooms.get(ws._roomId || '');
    if (!room) return;
    if (ws._role === 'host') {
      // drop all clients
      broadcast(room.clients, { t: 'host_left' });
      room.host = null;
    } else if (ws._role === 'client') {
      room.clients.delete(ws);
      if (room.host) send(room.host, 'client_left', {});
    }
    if (!room.host && room.clients.size === 0) rooms.delete(ws._roomId);
  });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
http.listen(PORT, () => console.log(`[relay] listening on ${PORT}`));
