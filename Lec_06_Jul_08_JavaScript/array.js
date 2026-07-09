// Stores multiple data in single variable
// in contiguous memory location
// eg: let arr = ["apple",123,true]
// Array has  indexing [ 0,1,2,3.....  ] to get the data
// eg: [ "apple",123, true, 1.2, 'banana']  // loosely type lang ( store mutiple data types values)
// let arr = [ 1, "john", true] // looselytype
console.log(arr[0]) // first element
console.log(arr[arr.length-1]) // first element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
arr.push('newEle') // insert at last
arr.unshift('startEle')  // inset at beginnning
arr.pop() // remove last ele
arr.shift() // remove first aray ele


// let arr=[1,2,3,4]
// // let arr2=arr //copy reference 
// let arr2=[...arr] //let arr2= 1,2,3  // similar for objects
// arr2[0]=8
// console.log(arr,arr2)

let numArr=[1,2,3,4]
// console.log(Math.max(...numArr)) // ...[[1,2]] => ...[1,2] => 1,2
// console.log(Math.min(...numArr))

// console.log(Math.ceil(3.1))
// console.log(Math.floor(3.6))
// console.log(Math.round(3.7))
// console.log(Math.round(3.3))
// console.log(Math.pow(2,2))
// let n=2.343534
// console.log(n.toFixed(2))
// let n='2345wefsd'
// console.log(parseInt(n))
let r=Math.random()
console.log(r)
let t=r*10
console.log(t.toFixed())
// (0-10) requirnment\

// let arr=[1,2,2,3,4,5,5] 
// M-1 uning SET 
// let unique=new Set(arr)
// console.log(Array.from(unique))

// console.log(arr.includes(6))

// let arr=[1,2,2,3,4,5,5] 
// let ans=[]
// arr.forEach(ele=>{
//   // console.log(ele,ans.includes(ele)) //true
//   if(!ans.includes(ele)){ //false
//     ans.push(ele)
//   }
// })
// console.log(ans)

// let arr=[1,2,2,3,1,2,5,4,3] 
// ele>2
// const t=arr.find((ele)=>{ //first ele return with matching condition
//   return ele>3
// })
// console.log(t)

// console.log(arr.indexOf(2))  // return index of Array

// EVERY vs SOME

let arr=[1,2,2,3,1,2,5,4,3] 
let p=arr.some(ele=>{ // kya koi ele condition match
  return ele>4 
})
// let p=arr.every(ele=>{ // kya saare ele condition match
//   return ele>0 // kya saare ele 2 se chote hai
// })
console.log(p)



