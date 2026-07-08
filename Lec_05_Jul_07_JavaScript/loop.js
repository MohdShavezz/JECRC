// for(let i=5;i>=0;i--){// i=10 , 10<10=flase
//   console.log('hi..', i)
// }
// for(let i=5;i>=0;i-=3){// i=10 , 10<10=flase
//   console.log('hi..', i)
// }

let arr = [6, 2, 3, 4, 5, 6, 7, 8]
// arr[0]
// print even numbers: 2 4 6 8
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    } else {
        console.log("odds:", arr[i])
    }
}

// PRIME NUMBER CHECKER
// let n=29

let num = 7; 
let factor = 0;

for (let i = 2; i <= num-1; i++) {  
    
    if(num%i==0){ // 5 : 2,3,4,5
      console.log('not prime')
      return
    }
}
console.log('prime')

// while
// let n=0
// while(n<5){
//     console.log(n) // 5 4 3 2 1

//     //break point condition false
//     n++  // 4 3 2 1 0
// }
// console.log('done')

// do-while : atleast runs once 
// let n=5
// do{
//   console.log(n) // 5 4 3 2 1
//   n-- // 4 3 2 1 0
// }while(n>0) 


let arr=[1,2,3,4] // loosely type
// for(let i=0;i<arr.length;i++){
//   console.log(i,arr[i])
// }

arr.forEach((ele,ind)=>{
  console.log(ele*ele)
})

// arr.map((ele,ind)=>{
//   console.log(ind,ele)
// })


