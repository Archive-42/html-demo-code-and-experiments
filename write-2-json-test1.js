// // const PATH = require('path');
// // const fs = require('fs');
// // const dirTree = require('directory-tree');

// // const tree = dirTree('./', {
// //             extensions: /\.(md|js|html|java|py|rb)$/
// //         }, (item, PATH, stats) => {
// //             console.log(item);
// //         },

// const dirTree = require("directory-tree");
// const filteredTree = dirTree("./", {
//     extensions: /\.(md|js|html|java|py|rb)$/
// });



/*


let writeStream = fs.createWriteStream('secret.txt');

// write some data with a base64 encoding
writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();


*/



const fs = require('fs');
const PATH = require('path');
let writeStream = fs.createWriteStream('contents.json');

const dirTree = require('directory-tree');
const {
    fstat
} = require('fs');

const tree = dirTree('./', {
    extensions: /\.(md|js|html|java|py|rb)$/
}, null, (item, PATH, stats) => {
    console.log(item);
    // write to a new file named 2pac.txt
    fs.writeFileSync('dir.json', `${item}`, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved

    });
    writeStream.write(`${item}`, 'base64');
});