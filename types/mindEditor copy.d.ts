import * as vscode from 'vscode';
export declare class MindEditorProvider implements vscode.CustomTextEditorProvider {
    private readonly context;
    constructor(context: vscode.ExtensionContext);
    static register(context: vscode.ExtensionContext): vscode.Disposable;
    resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void>;
    private notifyExternalExtensions;
    private updateDocument;
    private getContent;
    get extensionChannels(): any[];
}
//# sourceMappingURL=mindEditor%20copy.d.ts.map