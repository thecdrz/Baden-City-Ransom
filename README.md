# Baden City Ransom - Web Edition

A faithful recreation of the classic NES game River City Ransom using the original sprite assets and Phaser 3.

## 🎮 How to Play

### Controls
- **Arrow Keys**: Move left/right, jump (up)
- **A Key**: Punch attack
- **S Key**: Kick attack  
- **Space + Arrow**: Run
- **D Key**: Reserved for weapons/items (future)

### Objective
Fight through the streets, defeat gang members, collect money, and improve your stats!

## 🚀 Getting Started

### Option 1: Direct File Access
1. Open `rcr.html` directly in your browser (Chrome/Edge recommended)
2. The game should load automatically with embedded assets

### Option 2: Local Server (Recommended)
```bash
# Start local server
python -m http.server 8081

# Then visit: http://localhost:8081/rcr.html
```

# Baden City Ransom - Project Structure

## 📁 Project Organization

```
Baden-City-Ransom/
├── 📁 assets/
│   ├── 📁 audio/          # Sound effects and music
│   ├── 📁 backgrounds/     # Background images
│   ├── 📁 sprites/         # Character and enemy sprites  
│   └── 📁 misc/           # UI elements, fonts, weapons
├── 📁 game/
│   └── index.html         # Main game file (PLAY THIS!)
├── 📁 tests/              # Development test files
├── 📁 tools/              # Python conversion tools
├── assets.js              # Large base64 asset file (unused)
├── minimal_assets.js      # Smaller asset file (unused)
└── README.md             # This file
```

## 🎮 How to Play

1. **Start a local server:**
   ```bash
   cd Baden-City-Ransom
   python -m http.server 8080
   ```

2. **Open the game:**
   - Navigate to `http://localhost:8080/game/index.html`
   - OR double-click `game/index.html` in your browser

3. **Controls:**
   - Arrow Keys: Move Alex
   - A: Punch
   - S: Kick

## 🏗️ Development Status

### ✅ Working Features
- Single clean street background (cropped from multi-area image)
- Alex character with proper 16x32 sprite dimensions
- Ryan character (Player 2)
- Basic movement and animation system
- Punch and kick attacks
- Enemy gang members (3 types)
- Authentic River City Ransom pixel art style

### 🔧 Current Issues
- Enemy sprites may not display correctly
- Combat system needs hit detection
- No money/item drop system yet
- Missing authentic RCR gameplay mechanics

### 📋 Next Steps
1. Fix enemy sprite dimensions and animations
2. Add proper combat with hit detection
3. Implement money drops and pickups
4. Add more authentic RCR features (shops, stats, etc.)

## 🛠️ Technical Details

- **Engine:** Phaser 3.55.2
- **Rendering:** Canvas with pixel art settings
- **Assets:** Direct PNG loading (not base64 embedded)
- **Sprite Format:** 16x32 pixel frames for all characters
- **Resolution:** 800x600 game canvas

## 📝 File Descriptions

### Main Game
- `game/index.html` - The playable Baden City Ransom game

### Assets
- `assets/sprites/` - All character sprites (Alex, Ryan, enemies)
- `assets/backgrounds/` - Downtown and other area backgrounds
- `assets/misc/` - Fonts, weapons, shop items, misc art (e.g., BoxArt.png)

#### assets/misc details
- `NES - River City Ransom _ Street Gangs - Miscellaneous - Font.png`
- `NES - River City Ransom _ Street Gangs - Miscellaneous - Weapons.png`
- `NES - River City Ransom _ Street Gangs - Miscellaneous - Shop Items.png`
- `NES - River City Ransom _ Street Gangs - Miscellaneous - Mall NPCs.png`
- `BoxArt.png` (cover art placed under misc for convenience)

Note: BoxArt is included for personal, private use. Avoid redistributing.

### Development
- `tests/` - Various test files for debugging sprites and dimensions
- `tools/convert_assets.py` - Python script for converting PNGs to base64

### Legacy Files
- `assets.js` - 21,792 line base64 file (causes browser timeouts)
- Various `*.html` files in root - Old development versions

## 🎯 Goal

Create an authentic recreation of River City Ransom using the original NES sprites with modern web technologies, maintaining the classic beat 'em up gameplay and pixel-perfect aesthetic.

### ✅ Core Gameplay
- **Authentic sprites**: Using original River City Ransom sprite sheets
- **Player system**: Play as Alex with full stats (Punch, Kick, Weapon, etc.)
- **Combat system**: Punch/kick combos with damage scaling
- **Enemy AI**: 9 different gang member types with chase/attack behavior
- **Physics**: Proper jumping, gravity, collision detection
- **Money system**: Collect coins dropped by enemies
- **Health system**: Visual health bar with damage feedback
- **Experience system**: Stats increase through combat
- **Authentic backgrounds**: Downtown and other RCR locations

### 🎨 Visual Features
- **Pixel-perfect scaling**: 3x zoom with crisp pixel rendering
- **Authentic animations**: Walking, punching, kicking, idle, hit reactions
- **Background parallax**: Multi-layer scrolling backgrounds
- **Visual effects**: Hit effects, death effects, damage numbers
- **Health bars**: Player and enemy health visualization
- **Stats display**: Real-time stat tracking (P/K/W/T/A/D display)

### 🔧 Technical Features
- **Single-file game**: Everything embedded as base64 data URIs
- **Asset management**: Automatic sprite loading and animation creation
- **Responsive scaling**: Adapts to different screen sizes
- **Modern web tech**: Built with Phaser 3, Canvas rendering
- **Performance optimized**: Efficient sprite handling and physics

## 📂 Asset Analysis

### ✅ Assets Successfully Integrated
- **Backgrounds** (16): All major RCR locations converted
- **Player Characters** (2): Alex and Ryan sprite sheets
- **Enemies** (18): All gang members + bosses converted
- **Miscellaneous** (4): Font, NPCs, shop items, weapons

### 🎯 Current Implementation Status

#### Fully Working
- Player movement and combat
- Enemy spawning and AI
- Money collection system
- Health/damage system
- Background rendering
- Animation system

#### Partially Implemented
- **Stats system**: Basic framework (needs shop integration)
- **Weapons**: Sprites loaded (needs pickup/usage system)
- **Items**: Assets ready (needs shop/inventory system)

#### Missing Features (Could Use Additional Assets)
- **Sound effects**: No audio assets provided
- **Music**: Background music tracks
- **Shops**: Need shop interior backgrounds
- **Weapons in-game**: Need weapon pickup sprites
- **Food items**: For stat boosting
- **Boss battles**: Special boss arenas
- **Story elements**: Text/dialogue system

## 🎵 Audio Assets Needed

If you can provide these, I'll add full audio support:
- **Sound Effects**: Punch, kick, jump, coin pickup, enemy hit, death
- **Background Music**: Street theme, boss theme, shop theme
- **Voice samples**: Character grunts, victory sounds

## 🏪 Shop System Assets Needed

For a complete shop experience:
- **Shop interiors**: Mall, restaurant backgrounds
- **NPC sprites**: Shopkeeper animations
- **Food items**: Individual food sprites
- **Item icons**: Menu/inventory icons

## 🐛 Known Issues

1. **Enemy sprite frames**: May need adjustment for perfect animation timing
2. **Collision detection**: Fine-tuning needed for pixel-perfect hits
3. **Background scaling**: Some backgrounds may need aspect ratio adjustments
4. **Stat balancing**: Combat values may need tweaking

## 🔧 Development Notes

### Asset Conversion Process
All PNG assets were automatically converted to base64 data URIs and embedded in the HTML file, making it completely self-contained.

### Sprite Sheet Analysis
The game assumes 32x48 pixel character sprites with standard animation frames:
- Frame 0: Idle
- Frames 1-2: Walk cycle
- Frames 3-4: Attack sequence
- Additional frames for special moves

### Performance Considerations
- Canvas rendering for maximum compatibility
- Efficient sprite batching
- Optimized collision detection
- Memory management for effects

## 📈 Future Enhancements

### High Priority
1. **Weapon system**: Pick up and use baseball bats, chains, etc.
2. **Shop integration**: Buy food to increase stats
3. **Audio system**: Add sound effects and music
4. **Save system**: Persistent character progress

### Medium Priority
1. **Co-op multiplayer**: Add Ryan as Player 2
2. **Boss battles**: Implement unique boss mechanics
3. **More areas**: Multiple stages with different backgrounds
4. **Special moves**: Advanced combat techniques

### Low Priority
1. **Mobile controls**: Touch-screen optimization
2. **Online features**: Leaderboards, sharing
3. **Mod support**: Custom sprites/backgrounds
4. **Achievement system**: Progress tracking

## 🎮 Play Now!

The game is ready to play! Visit **http://localhost:8081/rcr.html** to experience the nostalgia.

Fight through the streets, build your stats, and save River City High!

---

*Built with ❤️ using original River City Ransom assets and modern web technology.*
