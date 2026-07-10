// this keyword
// let user={
//   name:'john',
//   age:23,
//   greet:function(){
//     console.log('greet')
//     // console.log(this)
//     // console.log(this.name,this.age)
//     // console.log(user['name'])
//   }
// }
// console.log(user.name)
// console.log(user['name'])
// user.greet()


// let user={
//   name:'john',
//   age:23,
// }
// let user2={
//   name:'peter',
//   age:25,
// }
// function greet(obj){
//     console.log('Hello',obj.name)
// }
// greet(user2)

// function greet(gt){
//   console.log(`${gt}, ${this.name}`)
// }

//call, apply, bind
// greet.call(user,"hello")
// greet.apply(user2,["hello"])
// greet.bind(user,"hello")()
// let fn=greet.bind(user,"hello")
// fn()


import obj from './calculator.js'
const {sub} =obj
// console.log(obj)

console.log(obj.sum(1,2))
console.log(obj.mul(2,3))
console.log(sub(3,5))