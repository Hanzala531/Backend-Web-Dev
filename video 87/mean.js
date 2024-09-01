const fs = require('fs');
 
// console.log( fs);

console.log('Start reading a file...' );

fs.writeFileSync('test.txt', 'Hello World!');

fs.writeFile('test2.txt', 'Hello World! his side Hanzala', ()=> {
    console.log("File written successfully");

    fs.readFile(`test.txt` ,(err, data) => {    
        if (err) {
            console.error('There was an error reading the file!', err);
            return;
        }
        console.log('File data: ', data.toString());
    })
    
})

fs.appendFile(`test2.txt`,`HanzalaTahir`,(e,d)=>{
    console.log(d);
    
})

console.log('Finish writing a file...');
