// let a=true
// let b=true
// let c=false
// let d=false
// console.log(a||b)
// console.log(a||c)
// console.log((a||c) && (b||c))
// console.log(a||b||c||d) // ek bhi true hua to : true
// console.log(a&&b&&true&&true&&false) // ek bhi false hua to : false

// let condition=null
// if(condition){
//   console.log('condition true hai')
// }else{
//   console.log('condition false hai')
// }

// // ternary operation : shorts if:else
// condition?true:false 
// condition?console.log('condition true hai'):console.log('condition false hai')

// let age=3
// if(age<10){
//     if(age>=0 && age<=5){ 
//         console.log('0-5')
//     }else{
//         console.log('6-9')
//     }
//     console.log('child') //0-10

// }else if(age<20){
//     console.log('teenager')
// }else if(age<30){
//     console.log('grown up')
// }else{
//     console.log('aged')
// }

//CALCULATOR
// a+b  : a,b operands, + operator
// let operator="/"
// let a=5
// let b=2
// if(operator=='+'){
//     console.log(a+b)
// }else if(operator=="-"){
//     console.log(b-a)
// }else if(operator=="*"){
//     console.log(b*a)
// }else{
//   console.log('invalid operator')
// }


let operator="*"
let a=5
let b=2
switch (operator) {
  case '+':
    console.log(b+a)
    break;
  case '-':
    console.log(b-a)
    break;
  case '*':
    console.log(b*a)
    break;
  default:
    console.log('invalid operator')
}



