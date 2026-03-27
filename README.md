# VS Code Sync Setup

A ready-to-use VS Code customization pack that helps you keep a consistent editor look and behavior across devices.

This repository contains:

- `custom-vscode.css` - main VS Code UI and editor custom styles
- `custom-vscode-overrides.css` - optional override layer for quick tweaks
- `vscode-script.js` - JS enhancements used by Custom CSS and JS Loader
- `settings.json` - example VS Code settings profile

## Who This Is For

Use this repository if you want to:

- apply the same VS Code visual style on multiple machines
- keep your VS Code settings in version control
- use hosted CSS/JS files via raw GitHub URLs

## Quick Start (New Device)

1. Install VS Code.
2. Sign in with your GitHub or Microsoft account.
3. Run `Settings Sync: Turn On`.
4. Make sure sync for `Settings`, `Extensions`, `Keybindings`, `UI State`, and `Profiles` is enabled.
5. Install fonts:
   - JetBrains Mono
   - JetBrains Mono Nerd Font (recommended fallback for symbols/icons)
6. Install the extension: **Custom CSS and JS Loader** (`be5invis.vscode-custom-css`).
7. Add this to your VS Code settings:

```json
"vscode_custom_css.imports": [
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/custom-vscode.css",
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/custom-vscode-overrides.css",
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/vscode-script.js"
]
```

8. Run command palette action: `Enable Custom CSS and JS`.
9. Reload VS Code.

## What Syncs Automatically

VS Code Settings Sync can sync:

- settings (`settings.json`)
- extensions
- keybindings
- snippets
- UI state
- profiles

Because of this, manual copying of `settings.json` is usually not required once Settings Sync is enabled.

## Important Notes

- Fonts are **not** synced by VS Code. Install them on every device.
- Custom CSS/JS patching is per-device. You must run `Enable Custom CSS and JS` on each machine.
- After each VS Code update, re-run `Enable Custom CSS and JS`.
- The "installation appears to be corrupt" warning is expected when VS Code binaries are patched by the custom CSS loader.

## Troubleshooting

If styles/scripts are not applied:

1. Re-run `Enable Custom CSS and JS`.
2. Confirm URLs in `vscode_custom_css.imports` are reachable.
3. Check that your fonts are installed and available to the OS.
4. Reload VS Code (`Developer: Reload Window`).

If you want to disable customizations temporarily:

1. Run `Disable Custom CSS and JS`.
2. Reload VS Code.

## Contributing

Issues and pull requests are welcome. If you share improvements, include screenshots or a short before/after note when possible.