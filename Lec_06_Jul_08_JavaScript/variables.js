// let a : declare
// a=10 : assign
// console.log(a)

// let, var, const 
// let a=true
// var b=6 
// const c='hello'

// var a=1  // functional scope, least restricted
// var a=5
// a=4
// console.log(a)


// a=2

// var a=5         
// function fn(){
//   a=2
//   console.log(a)  //2
// }
// fn()
// console.log(a) //2



// let a=5 // re-declaration not allowed
// let a=6

// let a=5 // re-declaration not allowed
// a=6 // assign
// a='hello'

// var a 
// a=10

// const a=5 //  Identifier 'a' has already been
// const a=6

// const a //can't redclare
// a=10

// const a=10  // can't change value later
// a=5

// const user={name:'john',age:25}
// // user={name:'mariya',age:10}  // error
// user.age=20
// console.log(user)


// let, const : block scope 
// var : function scope

// let a=2
// function fn(){
//     let a=5 
//     console.log(a) //5
//     if(true){
//         console.log(a) //5
//     }
// }
// fn()
// console.log(a) //2


// function childFn(){
//     let a=5
//     console.log(a) //5
// }
// function fn(){ // functional scope
//     let a=2
//     console.log(a) //2
//     childFn()
//     if(1){  // block scope
//         console.log(a) //2
//     }else{

//     }
// }
// fn()



// a=5   // var a=5
// console.log(a) 

// console.log(a)
// var a=5

// console.log(a) //undefined
// var a=5
// console.log(a)  // 5



// var x=1
// {
//     x=5
//     console.log(x)
// }
// console.log(x)



// var x=1
// {
//     var x=5
//     console.log(x)
// }
// console.log(x)

// var x=1 //5
// {
//     function fn(){
//         x=5
//         console.log(x)
//     }
//     fn()
// }
// console.log(x)

// let a=0/1/2/3/4/5
for(var i=0;i<5;i++){ // let 0 1 2 3 4
    setTimeout(()=>{
        console.log(i) //5
    },1000)
}

function fn(i){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

// let a=0 
// let a=1
// let a=2 
// let a=3 
// let a=4
for(var i=0;i<5;i++){
    fn(i)
}

























