// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { execute } from './execute';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let toggleLowerCase = vscode.commands.registerCommand('string-manipulate.lowercase', () => execute('lowercase'));
	let toggleUpperCase = vscode.commands.registerCommand('string-manipulate.UPPERCASE', () => execute('UPPERCASE'));
	let togglePascalCase = vscode.commands.registerCommand('string-manipulate.PascalCase', () => execute('PascalCase'));
	let toggleCamelCase = vscode.commands.registerCommand('string-manipulate.camelCase', () => execute('camelCase'));
	let toggleSnakeCase = vscode.commands.registerCommand('string-manipulate.snake_case', () => execute('snake_case'));
	let toggleDashCase = vscode.commands.registerCommand('string-manipulate.dash-case', () => execute('dash-case'));

	context.subscriptions.push(
			toggleLowerCase,
			toggleUpperCase,
			togglePascalCase,
			toggleCamelCase,
			toggleSnakeCase,
			toggleDashCase
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
