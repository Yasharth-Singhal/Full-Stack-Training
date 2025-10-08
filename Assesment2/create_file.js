const fs = require('fs');

const content = '"Node.js File System Working!"';

// Use relative or absolute path to the Assesment2 folder
fs.writeFile('./Assesment2/message.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created and message written successfully!');
});
