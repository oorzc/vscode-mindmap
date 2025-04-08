import * as vscode from 'vscode';
export declare class BinaryTextEditorProvider implements vscode.CustomTextEditorProvider {
    private readonly context;
    static register(context: vscode.ExtensionContext): vscode.Disposable;
    private static readonly viewType;
    constructor(context: vscode.ExtensionContext);
    resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): Promise<void>;
    openCustomTextEditor(document: vscode.TextDocument, options: {
        readonly viewColumn: vscode.ViewColumn;
    }, token: vscode.CancellationToken): Promise<vscode.WebviewPanel>;
    resolveCustomDocument(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.CustomDocument>;
}
//# sourceMappingURL=BinaryTextEditorProvider.d.ts.map