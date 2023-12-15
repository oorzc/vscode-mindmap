import * as vscode from 'vscode';
export declare class MindEditorProvider implements vscode.CustomEditorProvider {
    context: vscode.ExtensionContext;
    constructor(context: vscode.ExtensionContext);
    static register(context: vscode.ExtensionContext): vscode.Disposable;
    revertCustomDocument(document: vscode.CustomDocument, cancellation: vscode.CancellationToken): Thenable<void>;
    backupCustomDocument(document: vscode.CustomDocument, context: vscode.CustomDocumentBackupContext, cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup>;
    private readonly _onDidChangeCustomDocument;
    readonly onDidChangeCustomDocument: vscode.Event<vscode.CustomDocumentEditEvent<vscode.CustomDocument>>;
    saveCustomDocumentAs(document: vscode.CustomDocument, destination: vscode.Uri, cancellation: vscode.CancellationToken): Thenable<void>;
    openCustomDocument(uri: vscode.Uri): Promise<vscode.CustomDocument>;
    saveCustomDocument(document: vscode.CustomDocument): Thenable<void>;
    resolveCustomEditor(document: vscode.CustomDocument, webviewPanel: vscode.WebviewPanel): Promise<void>;
    private notifyExternalExtensions;
    private updateDocument;
    private getContent;
    get extensionChannels(): any[];
}
//# sourceMappingURL=mindEditor.d.ts.map