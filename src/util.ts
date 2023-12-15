import * as vscode from "vscode";

export function getRootUri() {
    return vscode.workspace.workspaceFolders?.[0].uri;
}

export async function selectFile(options?: vscode.OpenDialogOptions) {
    const rootUri = getRootUri();
    const res = await vscode.window.showOpenDialog({
        openLabel: '确认',
        canSelectFiles: true,
        canSelectFolders: true,
        defaultUri: rootUri,
        ...options,
    });

    if (!res) {
        return;
    }

    const [fileUri] = res;
    return fileUri;
}
