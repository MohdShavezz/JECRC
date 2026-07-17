const fs = require('fs')
const os = require('os')

console.log(os.cpus().length)
// Blocking
// console.log('Start of blocking code');
// const data = fs.readFileSync('myfile.txt', 'utf8'); 
// console.log(data)
// console.log('Blocking operation completed');

// Non-blocking
// console.log('Start of non-blocking code');
// fs.readFile('myfile.txt','utf8', (err, data) => {
//  if(err) throw err;
//  console.log(data)
//  console.log('Non-blocking operation completed');
// });
// console.log('This runs before the file is read');
// 11 -> 17 -> 14 -> 15 correct

//Event Loop Priority Execution
// console.log('1. Start');
// // Next tick queue
// process.nextTick(() => console.log('2. Next tick'));
// // Microtask queue (Promise)
// Promise.resolve().then(() => console.log('3. Promise'));
// // Timer phase
// setTimeout(() => console.log('4. Timeout'), 100);
// // Check phase
// setImmediate(() => console.log('5. Immediate'));
// console.log('6. End');
// 1 6 2 3 5 4 


