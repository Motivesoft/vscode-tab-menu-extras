# vscode-tab-menu-extras README

This is a simple extension that places certain menu options within easy reach on the right-click menu of editor tabs.

The following menu items can be added to the menu:
- `Save`
- `Save As...`
- `Save All`
- `Revert File`

## Features

The menu items are added to a section in the context menu that displays when the user right-clicks on an editor tab.

Settings can be used to control which of the menu items are displayed.

## Requirements

None

## Extension Settings

* `vscode-tab-menu-extras.enableSave`: Enable/disable the Save context menu item.
* `vscode-tab-menu-extras.enableSaveAs`: Enable/disable the Save As context menu item.
* `vscode-tab-menu-extras.enableSaveAll`: Enable/disable the Save All context menu item.
* `vscode-tab-menu-extras.enableRevertFile`: Enable/disable the Revert File context menu item.

## Known Issues

None reported

## Release Notes

### 1.0.2

- Deal with untitled files
- Works in Code for the desktop or for the web

### 1.0.1

- Force order of menu items

### 1.0.0

- Initial release
