import path from 'path';

let mypath = 'C://Users//HP//Desktop//NodeJS//NodeJS-Practice//PathModule.js//test2.txt';
console.log(path.extname(mypath));

console.log(path.dirname(mypath) );
console.log(path.basename(mypath));

console.log(path.join('C:', 'test2.txt'));