(function () {
    $(document).on('click', '.export', function (event) {
        event.preventDefault();
        var $this = $(this),
            type = $this.data('type'),
            exportType;
        switch (type) {
            case 'km':
                exportType = 'json';
                break;
            case 'xmind':
                exportType = 'json';
                break;
            case 'md':
                exportType = 'markdown';
                break;
            case 'svg':
                exportType = 'svg';
                break;
            case 'txt':
                exportType = 'text';
                break;
            case 'png':
                exportType = 'svg';
                break;
            default:
                exportType = type;
                break;
        }

        editor.minder.exportData(exportType).then(function (content) {
            // switch (exportType) {
            //     case 'json':
            //         console.log($.parseJSON(content));
            //         break;
            //     default:
            //         console.log(content);
            //         break;
            // }
            var blob = new Blob();
            switch (exportType) {
                case 'png':
                    blob = dataURLtoBlob(content); //将base64编码转换为blob对象
                    break;
                default:
                    blob = new Blob([content]);
                    break;
            }
            if (['xmind', 'png'].indexOf(type) != -1) {
                window.vscode.postMessage({
                    command: 'export',
                    filename: $('#node_text1').text(),
                    type: type,
                    content,
                });
            } else {
                var a = document.createElement("a"); //建立标签，模拟点击下载
                a.download = $('#node_text1').text() + '.' + type;
                a.href = URL.createObjectURL(blob);
                a.click();
            }
        });
    });

    // 导入
    $(document).on('click', '.import', function (event) {
        window.vscode.postMessage({
            command: 'importFile',
        });
    })

    window.addEventListener('message', function (event) {
        let command = event.data.command;
        let content = event.data.content;
        let basename = event.data.basename;

        if (command == 'importNewData') {
            var fileType = ''
            switch (basename) {
                case '.md':
                    fileType = 'markdown';
                    break;
                case '.txt':
                    fileType = 'text';
                    break;
                case '.km':
                case '.json':
                    fileType = 'json';
                    break;
                case '.xmind':
                    fileType = 'json';
                    break;
                default:
                    fileType = '';
                    break;
            }
            if (typeof content != 'string') {
                content = JSON.stringify(content);
            }
            fileType && editor.minder.importData(fileType, content).then(function (data) {
                var fileInput = document.getElementById('fileInput');
                fileInput && $(fileInput).val('');
            });
        }
    })


})();

//base64转换为图片blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(',');
    //注意base64的最后面中括号和引号是不转译的
    var _arr = arr[1].substring(0, arr[1].length - 2);
    var mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(_arr),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}
