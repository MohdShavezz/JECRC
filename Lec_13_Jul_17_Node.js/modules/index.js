// OS modules ==============================================

// const os = require('os') // commonjs
// import os from 'os' // modules

// // Basic information
// console.log('Platform:', os.platform());
// console.log('OS Type:', os.type());
// console.log('OS Release:', os.release());
// console.log('Architecture:', os.arch());
// console.log('Hostname:', os.hostname());
// console.log('Version:', os.version());

// // CPU
// console.log('CPU Info:', os.cpus());
// console.log('CPU Count:', os.cpus().length);

// // Memory
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());

// // User
// console.log('Current User:', os.userInfo());
// console.log('Home Directory:', os.homedir());
// console.log('Temporary Directory:', os.tmpdir());

// // Network
// console.log('Network Interfaces:', os.networkInterfaces());

// // System
// console.log('System Uptime (seconds):', os.uptime());
// console.log('Load Average:', os.loadavg());
// console.log('Endianness:', os.endianness());
// console.log('Machine:', os.machine());


// path MODULE ==============================================

// import path from 'path'
// import url from 'url'
// const my_path='/users/docs/file.txt'
// // console.log('basename: ',path.basename(my_path))
// // console.log('dirname: ',path.dirname(my_path))
// // console.log('extname: ',path.extname(my_path))
// // console.log('parse: ',path.parse(my_path))
// const __filename=url.fileURLToPath(import.meta.url)
// const __dirname=path.dirname(__filename)
// // console.log(__filename)
// // console.log(__dirname)
// console.log(path.join('abcd',my_path)) // relative
// console.log(path.resolve('abcd','index.html')) // join absolute path 

// url MODULE ==============================================
// import url from 'url' 
// let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// let q = url.parse(adr, true);
// console.log(q)
// // console.log(q.host);
// // console.log(q.pathname);
// // console.log(q.search);
// // let qdata = q.query;
// const {year,month}=q.query
// console.log(year,month);

// fs MODULE ==============================================

// import fs from 'fs'
// console.log('1')
// // sync/blocking
// // const data=fs.readFileSync('file.txt')
// // // console.log(data)
// // console.log(data.toString())

// // async/non-blocking
// fs.readFile('file.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
// console.log('2')

//PROMISE fs ================================================ 
// import fs from 'fs/promises'
// let readData = async (filename) => {
//     try {
//         const data = await fs.readFile(filename)
//         console.log(data.toString())
//     } catch (error) {
//         console.log('error:', error)
//     }
// }
// let writeData =async (filename,content) => {
//     try {
//        await fs.writeFile(filename,content)  //old data replace 
//     //    console.log('file written sucess.')    
//     } catch (error) {
//         console.log('error:', error)
//     }
// }
// let appendData =async (filename,content) => {
//     try {
//        await fs.appendFile(filename,content)  //old data replace 
//     //    console.log('appendData sucess.')    
//     } catch (error) {
//         console.log('error:', error)
//     }
// }

// // writeData('file.txt','hello there')
// // writeData('file.txt','kkkkkkk')
// // appendData('file.txt','\n lllll')
// readData('file.txt')


// streams ==================================================
// import fs from 'fs'
// const readStream=fs.createReadStream('fil.txt')
// readStream.on('data', (chunk) => {
//     console.log('Received a chunk of data:', chunk.toString());
// });
// readStream.on('error', () => {
//     console.log('Error aya hai readStream me');
// });
// // Listen for the 'end' event, when all the data has been read
// readStream.on('end', () => {
//     console.log('Finished reading the file.');
// });

// const writeStream =fs.createWriteStream('new.txt') //replace
// const writeStream =fs.createWriteStream('new.txt',{flags:'a'}) //append
// writeStream.write('kkkk')
// writeStream.end(()=>{
//     console.log('after write')
// })

//COPY FILE
// const readStream=fs.createReadStream('file.txt')
// const writeStream =fs.createWriteStream('new.txt')
// readStream.pipe(writeStream)

// events ===================================================
// data: event, error: event, end: event
// event.on('data',()=>{
//     // data event code
// })
// event.on('error',()=>{
//     // error event code
// })
// Emitter.emit('hi there')
// .on : data receive 
// .emit : data send

import {EventEmitter} from 'events'
const myEmitter=new EventEmitter()

// myEmitter.on('greet',(greeting)=>{ //receive
//     console.log(greeting)
// })

// myEmitter.on('rock',()=>{
//     console.log('hi i am rock')
// })
// // myEmitter.emit('greet','good morning.') //send 
// myEmitter.emit('rock')


myEmitter.on('third',(data)=>{ //listen
    console.log('third event data:',data)
})
myEmitter.on('second',()=>{ //listen
    let data='this is fine'
    console.log('2nd event invoked')
    myEmitter.emit('third',data) //call
})
myEmitter.on('first',()=>{ //listen
    console.log('first event invoked')
    myEmitter.emit('second') // call
})

myEmitter.emit('first') //call

myEmitter.on('error',(err)=>{
    console.log(err)
})



