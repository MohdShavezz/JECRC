//Objects

// let obj={}
// let obj={
//   age:24,
//   name:'john',
// }
// console.log(obj['age'])
// console.log(typeof obj)
// let newObj={
//   phone:990898,
//   ...obj,
// }
// console.log(newObj)

// let nObj={isActive:true}
// let newObj=Object.assign(obj,nObj) // join to Objects
// console.log(newObj)


// let user={
//   name:'user',
//   age:24,
//   isActive:true,
//   hobbies:['football','cricket','cycling','swim'],
//   address:{
//     street:'ab sant colony',
//     zipcode:234235,
//   }
// }
// let str=user.address.street
// let str2=user.address.pincode //undefined
// console.log(user.hobbies[1])
// console.log(user.address)

// delete user.age // remove object prop
// user.name='tom'
// console.log(user)

// Object.freeze(user)
// user.name='tom'
// console.log(user)

//JSON.stringify vs JSON.parse
// let obj={
//   name:'asdf',age:23
// }
// console.log(obj)
// console.log(JSON.stringify(obj)) // obj => string
// let stringifyData=JSON.stringify(obj) 
// console.log(JSON.parse(stringifyData)) // str => obj


// let user={
//   name:'john',
//   age:22,
//   address:{
//     street:'ab sant colony',
//     zipcode:234235,
//   }
// }
// // let user2={...user} // shallow copy
// let user2 = JSON.parse(JSON.stringify(user)) // deep copy
// user2.name='tom'
// user2.address.zipcode=111111 

// console.log(user)
// console.log(user2)


// let arr=[1,2,2,5,4,2,1]
// task frequency of array elements
// {
//   1:2,
//   2:3,
//   5:1,
//   4:1
// }
let arr=[1,2,2,5,4,2,1]
let obj={}
arr.forEach(ele=>{// 1
  if(!obj[ele]){ // !obj[1] {1:2,2:2,5:1,4:1}
    obj[ele]=1
  }else{
    obj[ele]+=1
  }
})
console.log(obj)



