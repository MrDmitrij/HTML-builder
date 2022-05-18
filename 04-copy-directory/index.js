const fs = require('fs');
const path = require('path');

let dirPath = path.join(__dirname, 'files');
let dirPathCopy = path.join(__dirname, 'files-copy');

fs.mkdir(dirPathCopy, { recursive: true }, (err) => {
    if (err) throw err;
});

fs.readdir(dirPathCopy, (err, files) => {
    if (err) throw err;
    for (let i = 0; i < files.length; i++) {
        let copy = path.join(dirPathCopy, files[i]);

        fs.unlink(copy, (err) => {
            if (err) throw err;
        });
    };
});

fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    for (let i = 0; i < files.length; i++) {
        let file = path.join(dirPath, files[i]);
        let copy = path.join(dirPathCopy, files[i]);

        fs.copyFile(file, copy, (err) => {
            if (err) throw err;
        });
    };
});