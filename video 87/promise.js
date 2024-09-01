import fs from 'fs/promises';

let a = await fs.readFile('test2.txt');

// let b = await fs.writeFile('test2.txt' , `\n\n\nThis is a test file`);

let b =  fs.appendFile('test2.txt' , `\n\n\nThis is a test file`);