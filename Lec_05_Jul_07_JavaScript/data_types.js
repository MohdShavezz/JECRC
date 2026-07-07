// data types 

// String, number, object, boolean

let a // declareation of variable a 
a=10 // asign 10 to variable a
// let a=10

let name="john"
console.log(name, typeof(name)) // john string

let age=23
console.log(age,typeof(age)) // 23 number

let isActive = false  
console.log(isActive,typeof(isActive)) // false boolean

// let n=9007199254740991
// console.log(n+1)
// console.log(n+2)

let n=9007199254740991n
console.log(n+1n)
console.log(n+2n)

// console.log(1=='1') // value compare, type not compatred
// console.log(1==='1') // value+type compare

// primitive type: number , bool, string
// non primitive: array, object 

// console.log([1,2]==[1,2]) // memory locations diffrent: 997686, 887986

// console.log('12'=='12')

// console.log(!true)

// console.log(!'12345')

// console.log(!0) // !0 => true
// console.log(!false) // !false => true
// console.log(!1) // !1 => false
// console.log(!true) // !true => false

// truthy values: true, 'string', [], '0'
// falsy values: false , 0 , -0, null, undefined

// if(null){
//   console.log('hi..')
// }

// let condition=null
// if(condition){
//   console.log('condition true hai')
// }else{
//   console.log('condition false hai')
// }

// ternary operation : shorts if:else
// condition?true:false 
// condition?console.log('condition true hai'):console.log('condition false hai')



let a=true
let b=true
let c=false
let d=false
console.log(a||b)
console.log(a||c)
console.log((a||c) && (b||c))
console.log(a||b||c||d) // ek bhi true hua to : true
console.log(a&&b&&true&&true&&false) // ek bhi false hua to : false


let d= new Date() // Object
d.getFullYear() //2026

// NaN
console.log(isNaN(true)) // isNaN kya ye number nahi hai 

// undefined

// let a
// console.log(a)

// let user={
//   name:'john',age:22
// }
// console.log(user.firstname)

// NULL
// user gives explicitly
let a=null
console.log(a,typeof(null))

// hobbies 
// gym, singing, cycling...
// let arr=['cycling',23,45,true,{}]

let hobbies = ['gym', 'singing', 'cycling' ,  "writing"]
// console.log(hobbies[0]) //gym
// console.log(hobbies[1]) //singing
// console.log(hobbies.length) // number of elements in array
// console.log(hobbies[hobbies.length-1])

for(let i=0;i<hobbies.length;i++){ // 4<=3 false
  console.log(hobbies[i])
}

// console.log(1=='1') // value compare, type not compatred
// console.log(1==='1') // value+type compare

// primitive type: number , bool, string
// non primitive: array, object 

// console.log([1,2]==[1,2]) // memory locations diffrent: 997686, 887986

// console.log('12'=='12')

// console.log(!true)

// console.log(!'12345')

// console.log(!0) // !0 => true
// console.log(!false) // !false => true
// console.log(!1) // !1 => false
// console.log(!true) // !true => false

// truthy values: true, 'string', [], '0'
// falsy values: false , 0 , -0, null, undefined

// if(null){
//   console.log('hi..')
// }




