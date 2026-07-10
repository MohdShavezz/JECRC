// import { a_cal } from "./calculation.js";
//ES6
// let , const
// arrow function
// ... spread operator
// default params in function 
// Set 


// function sum(a,c=0,b){ // default params wrong syntax
//   console.log(a+b+c)
// }
// sum(1,2)
// function sum(r,p=0,t=5){ // default params wrong syntax
//   console.log(r+p+t)
// }
// sum(1)

// let arr=['apple','mango','cat','phone']
// let one = arr[0]
// let two = arr[1]
// let three = arr[2]
// console.log(one,two,three)

// let [one,two,three]=arr // destructuring of array
// console.log(one,two,three)

// let [one,two]=arr
// console.log(one) //apple
// console.log(two) //mango

//REST OPERATOR
// let [one,pt,...two]=arr
// console.log(one)
// console.log(pt)
// console.log(two)

// let arr=['apple','mango','cat','phone']
// let [one,...pt,two]=arr // invalid


// function sum(){
//   console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
//   console.log(Array.from(arguments))
// }
// sum(1,2,3,4)


// function sum(arr){
//   //loop
// }
// let nums=[1,2,3,4]
// sum(nums)

// let obj={
//   name:'john',
//   age:24,
//   isActive:true
// }
// let {name,age}=obj //obj destructuring
// console.log(name,age)

// let {name:myname}=obj
// console.log(myname)

// let {name,...rst}=obj
// console.log(name)
// console.log(rst)


// for in (obj) 
// let obj={
//   name:'john',
//   age:24,
//   isActive:true
// }
// let arr=[1,2,3,4]

// for( let i in arr){
// console.log(i)
// }


// for of
// let arr=[1,3,'appple']
// for( let ele of arr){
//   console.log(ele)
// }

// Array 
// map (modify) 
// let arr=[1,2,3,4,5,6] 
//square of all arr eles
// let newArr=arr.map((ele,ind)=>{
//   return ele*ele
// })
// let newArr=arr.map(ele=> ele*ele)
// console.log(newArr)

// filter (conditionaly filter)
// let arr=[1,2,3,4,5,6] 
// let ans=arr.filter((ele)=>{
//   return ele%2==0
// })
// let ans=arr.filter(ele=> ele%2==0)
// console.log(ans)

// reduce (combine)
// let arr=[1,2,3,4] 
// // sum of arr eles
// let sum=arr.reduce((acc,ele)=>{
//   return acc+ele // 0+1, 1+2, 3+3 ...
// },0)
// console.log(sum)


// modules :import/export

// console.log(a_cal)