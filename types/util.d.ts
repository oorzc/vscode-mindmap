/// <reference types="node" />
import * as vscode from "vscode";
export declare function getRootUri(): vscode.Uri | undefined;
export declare function selectFile(options?: vscode.OpenDialogOptions): Promise<vscode.Uri | undefined>;
export declare function changeSvgImg(svgContent: string): Promise<string>;
export declare function requestFile(url: string): Promise<Buffer>;
//# sourceMappingURL=util.d.ts.map