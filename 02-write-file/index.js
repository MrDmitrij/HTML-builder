const fs = require('fs');
const path = require('path');
const { stdout, stdin, exit } = require('process');

const filePath = path.join(__dirname, 'text.txt');

fs.createWriteStream(filePath);
stdout.write('Hello! Please, enter the text...\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }

    fs.appendFile(filePath, data.toString(), () => { });
})

process.on('SIGINT', process.exit);
process.on('exit', () => {
    console.log('Goodbye!');
    exit();
})