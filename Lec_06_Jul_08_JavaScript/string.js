// let str='peter'
// let str2="john"
// console.log(typeof str)
// console.log(str[0])
// console.log(str[str.length-1])
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// str[0]='q' // immutable
// console.log(str)

//SRTING METHODS
let str='Hello there'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.includes('t'))
// console.log(str.includes('q'))
// console.log(str.indexOf('q')) // not present -1
// console.log(str.indexOf('l')) // first accurance
// console.log(str.lastIndexOf('l')) 
// console.log(str.slice(0,5)) 
// console.log(str.slice(5,11)) //there
// console.log(str[str.length-1])
// console.log(str.slice(str.length-5,))
// console.log(str.slice(1,))

// slice vs splice 
// splice : array 

let arr=[1,4,2,7]
// arr.splice(ind,no.of eles tobe delted,elements to be inserted)
//requirment: remove 4 and 2, add 6
arr.splice(1,2,6) // modify same array
console.log(arr)


// let str='Hello there'
// console.log(str.replace('e','z'))
// console.log(str.replaceAll('e','z'))

// "Hll thr"
// console.log(str.match(/[h]/gi)) // extractor

// let arr=str.split('')
// console.log(arr)
// console.log(arr.reverse())
// console.log(arr.join(''))

// console.log(str.split('').reverse().join(''))

// let fname='john'
// let lname='doe'
// console.log('hello, '+fname+' '+lname)
// console.log('hello, '.concat(fname,' ',lname))

// template litarals
// "Hello, {john} {doe}"
// console.log(`Hello, ${fname} ${lname} alskdjfl asdf ${lname}`)

// Q.1
// let str='hello' // Hello

// let firstChar=str[0]
// console.log(firstChar.toUpperCase())
// console.log(str.slice(1,))

// console.log(str[0].toUpperCase()+str.slice(1,))

// Q.2
// let str = 'maham' //true
// let str2= 'komal' // false

// 'maham'=== 'maham' // true
// 'komal'=== 'lamok' // false

// let beforeRev='asdffdsa'
// let afterRev=beforeRev.split('').reverse().join('')
// if(beforeRev==afterRev){
//   console.log(true)
// }else{
//   console.log(false)
// }


let str='abcddcba'
str==str.split('').reverse().join('')?console.log(true):console.log(false)
// 'asdf'=='fdsa'?console.log('hi'):console.log('by')
