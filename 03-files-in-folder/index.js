const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, results) => {
    if (err) {
        throw err;
    }
    results.forEach(result => {
        if (result.isFile()) {
            fs.stat(path.join(folderPath, result.name), { withFileTypes: true }, (err, stats) => {
                if (err) {
                    throw err;
                }
                console.log(path.parse(result.name).name + ' - ' + path.extname(result.name).slice(1) + ' - ' + stats.size + 'b' + '\n');
            }
            )
        }
    })
})