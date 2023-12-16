import * as vscode from "vscode";
const request = require('request')
const base64 = require('base64-js');
import replaceAsync from "string-replace-async";

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

//将svg中的图片地址转为base64
export async function changeSvgImg(svgContent: string) {
    let res = await replaceAsync(svgContent, /xlink:href="([^"]*)"/g, async (match, url) => {
        try {
            // 下载图片
            const response = await requestFile(url)
            // 将图片转换为Base64编码
            const base64Data = base64.fromByteArray(response);
            // 替换SVG中的图片地址为Base64编码
            const base64ImageUrl = `data:image/png;base64,${base64Data}`;
            return match.replace(url, base64ImageUrl);
        } catch (error) {
            return match
        }
    });
    return res
}


//文件请求
export function requestFile(url: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        request(
            {
                method: 'get',
                url,
                pool: false,
                strictSSL: false,
                rejectUnauthorized: false,
                encoding: null // if you expect binary data
            },
            (error: any, res: any, body: Buffer | PromiseLike<Buffer>) => {
                if (error) {
                    reject(error);
                } else {
                    if (!(res.statusCode === 200 || res.statusCode === 206)) {
                        reject('路径不存在');
                    } else if (error) {
                        reject(error);
                    }
                    resolve(body);
                }
            }
        );
    });
}

