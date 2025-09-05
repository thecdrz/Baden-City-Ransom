# Changelog

All notable changes to Baden City Ransom will be documented in this file.

## [v2.1.0] - 2025-09-01

### 🕹️ Co‑op Netplay & Sync

#### Added
- Host snapshots now include P1/P2 animation keys and attacking flags
- Clients mirror host animations for both players, keeping swings in sync
- Boss metadata in snapshots so clients always render the active boss

#### Fixed
- Client inputs no longer trigger host player actions locally (authority cleanup)
- CDRZ sprint speed normalized; smoother walk/run animation switching
- TheGuyWho stutter on client during CDRZ jump: gated client-side jump physics and animation; clients follow host snapshots to avoid conflicts
- Depth sorting and feet alignment polished across spawn/resize/respawn

#### Flow
- Non‑autostart co‑op: 1P/2P select, Host/Join, lobby start signal
- Story scene synchronized: host-timed typewriter with matching audio clicks


### 🎮 Major Combat System Overhaul

#### Added
- **Comprehensive Hit Detection Debugging**: Added detailed console logging to diagnose combat issues
- **Distance-Based Hit Detection**: Replaced unreliable rectangle intersection with precise distance calculations
- **Character Separation Logic**: Prevents players and enemies from getting stuck overlapping during combat
- **Enhanced Invulnerability Frames**: Extended i-frames to 700ms for smoother combat flow
- **Hit Confirmation System**: Visual and audio feedback for successful hits

#### Fixed
- **Combat Functionality**: Fixed broken hit detection where player and Miller boss could only push each other
- **Boss Attack Mechanics**: Miller now properly damages the player with consistent hit detection
- **Player Attack System**: Alex's punch and kick attacks now reliably connect with enemies
- **Overlap Resolution**: Characters no longer get locked in overlapping positions

### 🎨 Visual & UI Improvements

#### Added
- **Enhanced Title Screen**: Increased size by 15% (scale factor 0.99x → 1.14x) for better visibility
- **Sprite Preprocessing**: Added magenta color-key transparency conversion for cleaner sprites
- **Boss Sprite Enhancement**: Added 3px bottom padding to prevent feet clipping
- **Robust Texture Fallbacks**: Better handling of missing textures with placeholder systems

#### Fixed
- **Sprite Rendering**: Improved boss and player sprite display with proper transparency handling
- **Visual Artifacts**: Eliminated solid rectangle artifacts on some renderers

### 🐛 Bug Fixes & Stability

#### Added
- **Defensive Coding**: Comprehensive null checks and error handling throughout
- **Enhanced Error Reporting**: Detailed error messages with stack traces
- **Graceful Degradation**: Game continues functioning even when some assets fail to load
- **Scene Initialization**: Improved scene startup with proper verification

#### Fixed
- **Pause Key Handling**: Fixed null reference errors in pause key checking
- **Animation System**: Enhanced resilience against missing animation frames
- **Texture Loading**: Better error handling for asset loading failures

### 🧪 Development & Testing

#### Added
- **Test Suite**: Created comprehensive test files for debugging
  - `test_simple.html` - Basic Phaser functionality test
  - `test_minimal.html` - Minimal script loading verification  
  - `direct_sprites.html` - Direct sprite file loading test
  - `rcr_authentic_final.html` - Standalone authentic RCR test
- **Debug Infrastructure**: Enhanced development tools and debugging capabilities
- **Console Logging**: Detailed logging system for troubleshooting combat and loading issues

#### Changed
- **Asset Management**: Improved asset loading with better error reporting
- **Development Workflow**: Enhanced debugging tools for faster iteration

### 📝 Code Quality

#### Added
- **Comprehensive Documentation**: Improved code comments and documentation
- **Error Handling Patterns**: Consistent error handling throughout the codebase
- **Separation Logic**: Clean separation between combat, movement, and rendering systems

#### Changed
- **Code Organization**: Better separation of concerns and modular structure
- **Performance**: Optimized hit detection calculations for better frame rates

---

## [v2.0.0] - Previous Release

### Features
- Initial Baden City Ransom implementation
- Player movement and basic combat
- Enemy AI and spawning system
- Background rendering and camera following
- Basic HUD and health system
- Alex player character with animations
- Miller boss character
- Multiple test environments

### Technical
- Phaser 3.55.2 integration
- Canvas rendering with pixel art optimization
- Sprite sheet processing and animation system
- Asset loading and management system

---

## Version History

- **v2.1.0** (2025-09-01) - Combat System Overhaul & UI Improvements
- **v2.0.0** - Initial Release - Core Game Functionality
