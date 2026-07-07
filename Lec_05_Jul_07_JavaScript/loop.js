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