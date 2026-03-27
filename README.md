# VS Code Sync Setup

This repository stores my shared VS Code customization files:

- `custom-vscode.css`
- `custom-vscode-overrides.css`
- `vscode-script.js`
- `settings.json`

## What Syncs Automatically

VS Code Settings Sync can automatically sync these across devices when you sign in with the same GitHub or Microsoft account and turn on Settings Sync:

- Settings (`settings.json`)
- Extensions
- Keybindings
- Snippets
- UI state
- Profiles

Because of that, you usually do not need to manually copy `settings.json` to another device.

## What This Repo Is For

This repo is mainly for:

- Hosting Custom CSS and JS Loader assets over GitHub raw URLs
- Keeping a backup copy of `settings.json`
- Reusing the same custom styling on multiple devices

## New Device Setup

On a new machine:

1. Install VS Code.
2. Sign in with the same GitHub or Microsoft account.
3. Run `Settings Sync: Turn On`.
4. Make sure `Settings`, `Extensions`, `Keybindings`, `UI State`, and `Profiles` are enabled.
5. Install `JetBrains Mono`.
6. Confirm the `Custom CSS and JS Loader` extension is installed.
7. Verify these imports exist in settings:

```json
"vscode_custom_css.imports": [
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/custom-vscode.css",
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/custom-vscode-overrides.css",
  "https://raw.githubusercontent.com/rnldvrgl/rnldvrgl-vscode/main/vscode-script.js"
]
```

8. Run `Enable Custom CSS and JS`.
9. Reload VS Code.

## Important Notes

- Fonts are not synced by VS Code. Install them separately on each device.
- Custom CSS/JS patching is per-device, so you must run `Enable Custom CSS and JS` on each machine.
- The "installation appears to be corrupt" warning is expected when Custom CSS and JS Loader patches VS Code files.
- After each VS Code update, run `Enable Custom CSS and JS` again.
