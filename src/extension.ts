import * as vscode from 'vscode';
import { MindEditorProvider } from './mindEditor';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(MindEditorProvider.register(context));
}

export function deactivate() {}
