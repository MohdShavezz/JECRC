//Sync(blocking) or Assync(non-blocking)
console.log('hi..') 
setTimeout(()=>{
  console.log('one')
},1000)
setTimeout(()=>{
  console.log('two')
},500)
setTimeout(()=>{
  console.log('three')
},1500)
console.log('by...')


//Sync(blocking) or Assync(non-blocking)
// order > packing > deliver 
// setTimeout(()=>{
//   console.log('packing')
// },1000)
// setTimeout(()=>{
//   console.log('deliver')
// },500)
// setTimeout(()=>{
//   console.log('order')
// },1500)

//callback hell or pyramid of doom
//tarika-1
// setTimeout(()=>{
//   console.log('order')
//   setTimeout(()=>{
//     console.log('packing')
//       setTimeout(()=>{
//         console.log('deliver')
//       },500)
//   },1000)
// },1500)

//tarika-2
//CALLBACK
// function Order(packing_cb){
//   console.log('Order')
//   function Packing(deliver_cb){
//   console.log('Packing')
//   function Deliver(){
//   console.log('Deliver')
// }
// }
// }
// function Order(packing_cb){
//   console.log('Order')
//   packing_cb(Deliver)
// }
// function Packing(deliver_cb){
//   console.log('Packing')
//   deliver_cb()
// }
// function Deliver(){
//   console.log('Deliver')
// }
// Order(Packing)

// promise: Object {pending, fulfilled, or rejected}

// let p= new Promise((res,rej)=>setTimeout(function(){
//     let allgood=0; 
//     if(allgood){
//       res('promise resolve..')//then
//     }else{
//       rej('promise failed..')//catch
//     }
// },1000))
//M:1 then, catch
// p.then((data)=>{ // promise success
//   console.log(data)
// }).catch((err)=>{ // promise fail
//   console.log('error:',err)
// }).finally(()=>{
//   console.log('anyway run')  
// })

//M:2 assync await
// async function fn(){
//   try{
//     const res=await p // assync
//     console.log(res)
//   }catch(err){
//     console.log('error:',err)
//   }  
// }
// fn()

let Order=new Promise((res,rej)=>setTimeout(function(){
  res('order')
}))

let Packing=new Promise((res,rej)=>setTimeout(function(){
  res('packing')
}))

let Deliver=new Promise((res,rej)=>setTimeout(function(){
  res('deliver')
}))
async function fn(){
  try{
    const o=await Order // assync
    console.log(o)
    const p=await Packing // assync
    console.log(p)
    const d=await Deliver // assync
    console.log(d)
  }catch(err){
    console.log('error:',err)
  }  
}
fn()

