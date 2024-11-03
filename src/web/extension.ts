// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-tab-menu-extras" is now active in the web extension host!');

	context.subscriptions.push(vscode.commands.registerCommand('vscode-tab-menu-extras.listCommands', async () => {
        const allCommands = await vscode.commands.getCommands();
		allCommands.forEach( command => {
			console.log(command);
		});
	}));

	// Make sure we invoke this on the editor whose tab we clicked on, regardless of
	// whether it is the active editor
	context.subscriptions.push(vscode.commands.registerCommand('vscode-tab-menu-extras.save', async (uri: vscode.Uri) => {
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);
		if (editor && document.isDirty) {
		  vscode.commands.executeCommand('workbench.action.files.save');
		}
	}));

	// Make sure we invoke this on the editor whose tab we clicked on, regardless of
	// whether it is the active editor
	context.subscriptions.push(vscode.commands.registerCommand('vscode-tab-menu-extras.saveAs', async (uri: vscode.Uri) => {
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);
		if (editor && document.isDirty) {
			vscode.commands.executeCommand('workbench.action.files.saveAs');
		}
	}));

	// We can invoke this on any active editor
	context.subscriptions.push(vscode.commands.registerCommand('vscode-tab-menu-extras.saveAll', async (uri: vscode.Uri) => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
		  vscode.commands.executeCommand('workbench.action.files.saveAll');
		}
	}));

	// Make sure we invoke this on the editor whose tab we clicked on, regardless of
	// whether it is the active editor
	context.subscriptions.push(vscode.commands.registerCommand('vscode-tab-menu-extras.revertFile', async (uri: vscode.Uri) => {
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);
		if (editor && document.isDirty) {
		  vscode.commands.executeCommand('workbench.action.files.revert');
		}
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
