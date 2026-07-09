// function
// function greetUser(username='unknown'){ // default parameters
//   console.log('hello',username)
// }
// function sum(x,y){ // fn params (x,y), fn define, parametarised fn
//   console.log(x+y)
// }
// let a=5,b=6
// sum(a,b) // fn call, fn args 
// sum(1,2)

// greetUser('john') 

// function multiply(a,b){
//   return a*b
// }
// let m=multiply(2,3)

// function fn(){}// fn definition
// let a=function fn(){} // fn expression

let a=function fn(){
  console.log('hi')
}
// a()

// anonyms fn
let b=function(){  
  console.log('by')
}
// b()

// arrow function 
// let print=(v)=>{
//   console.log('hi print',v)
// }
// print(123)

// let hisum=()=>console.log('hi sum')
// let multiply=(a,b)=>{
//   return a*b
// }

// let multiply=(a,b)=>a*b

// console.log(multiply(2,3))

//CALL BACK fn

function fn(cb){
  console.log('fn call..')
  cb()  // callback fn
}
fn(()=>{ // a call back fn passed as an argument 
  console.log('hi there callback')
})



//callback
// function fn2(){
//   console.log('hi i am cb')
// }
// function fn(cb){ 
//   console.log('hi')
//   cb()
// }
// fn(fn2) // callback aisa fn jo as a argument pass ho kisi fn me

//higher order function
// function that return function
// function fn(){ //higher order function
//   return function(){
//     // code here
//   }
// }
// console.log(fn())

// function multiplier(f){  // f=2
//   return function(n){  // double n=10
//     return n*f
//   }
// }
// const double=multiplier(2)
// const triple=multiplier(3)
// console.log(double(10)) // 20 
// console.log(triple(10)) // 30


// CLOSURE
// in CLOSURE inner function retains access to the variables  
// of its outer function, even after the outer function 
// has finished executing

//1. innert fn can acces the var of outer
//2. inner fn can retain the values of outer fn's variable

function outer(){  
  let a=0  // lexical scope  //momery: a:9988 location
  return function(){
    return a++
  }  
}

let fn=outer()
console.log(fn()) //0  //momery: a:9988 location
console.log(fn()) //1  //momery: a:9988 location
console.log(fn()) //2  //momery: a:9988 location
console.log(fn()) //3  //momery: a:9988 location

function fn(){
  let a=9  //momery: a:9988 location
  let b=5  // momery: b:0000 location
  console.log(a,b)
}
fn()
// momery:a: empty
// momery:b: empty

// IIFE (Immediately Invoked Function Expression)
// An IIFE is a JavaScript design pattern where a function runs automatically as soon as it is defined
// ({})(); 

// (function () {
//   console.log("This runs immediately!");
// })();

//CURRYING
// let a=fn1()
// let b=fn2(a)
// let c= fn3(b)
// console.log(c)
let ans=function(a){
  return function(b){
    return function(c){
       return a+b+c
    }
  }
}
console.log(ans(1)(2)(3))


//RECURSION: fn call itself again n again

function fn(){
  console.log('HI.')
  fn()

  //base condition mandatory
}
fn()


//Factorial
// function factorial(num){ //4
//     if(num===1) return 1
//     return num*factorial(num-1) //4*3*2*factorial(1)
// }

// console.log(factorial(4))

//fabonicci series
// nth fabonicci number?
// 0 1 1 2 3 5 8 
// getFabonicci(0) //0
// getFabonicci(1) //1
// getFabonicci(2) //1
// getFabonicci(6) //8

// function getFibonacci(n) {
//     if (n <2) return n;
//     return getFibonacci(n - 1) + getFibonacci(n - 2);
// }
// // console.log(getFibonacci(6))
// function printFabo(n){
//   for(let i=0;i<n;i++){
//     console.log(getFibonacci(i))
//   }
// }
// printFabo(5)


function fn3(){
  console.log('fn3')
}
function fn2(){
  console.log('fn2')
  fn3()
}
function fn(){
  console.log('fn')
  fn2()
}
fn()



function fn3(){
  console.log('fn3')
}
function fn2(){
  fn3()
  console.log('fn2')
}
function fn(){
  fn2()
  console.log('fn')
}
fn()


setTimeout(()=>{
  console.log('one')
},1000)
setTimeout(()=>{
  console.log('two')
},2000)
console.log('hello')


// Javacript  Execution Context

function inner(){
  let a=3
  console.log(a)
}
function outer(){
  let a=1
  let b=5
  console.log(a,b)
  inner()
}