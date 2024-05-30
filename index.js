const http = require("http");
var formidable = require('formidable');
var fs = require('fs');

const requestListener = async function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        await form.parse(req, async function (err, fields, files) {
            if (!files.files) {
                res.write('No files to upload');
                res.end();
                return;
            }
            await files.files.forEach(async file => {
                var oldpath = file.filepath;
                console.log('file: ', file)
                var extension = '.'+file.originalFilename.split('.').reverse().shift();
                var newpath = './uploads/'+file.newFilename+extension;
    
                await fs.rename(oldpath, newpath, (err) => {
                    if (err) throw err;
                })
            })
            res.write('Files uploaded');
            res.end();
        });
    } else {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
    <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="files" multiple="true">
        <input type="submit" value="Submit">
    </form>
</body>
</html>
        `);
    }
}

const server = http.createServer(requestListener);
const host = '192.168.0.117';   // CHANGE ME to something like 192.168.0.100
const port = 3000;

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}.`);
    if (host == 'localhost')
        console.log(`
        To allow other devices to connect:
        \tChange the 'localhost' to an IP address.
        \tOpen Terminal and type in "ipconfig".
        \tVisit README.md section Configuration for instruction`);
})