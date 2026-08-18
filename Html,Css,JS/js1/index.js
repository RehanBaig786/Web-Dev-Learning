// console.log("Assalamualaikum jee!")
// console.log("Ap kaise hoo!!")

// let a =  4

// console.log(a**2)
// console.log(a++)
// console.log(++a)

// for(let i=1;i<=5;++i){
//     console.log(i)
// }

// let i=1
// while(i<=5){
//     console.log(i)
//     ++i;
// }

// let firstName = "rehan"
// let lastName = "baig"

// let fullName= `${firstName} ${lastName}`
// console.log(fullName)

// let arr = ["rehan","baig",10,20,30,40,50,60,70];

// arr.splice(2,3,'MCA')
// console.log(arr)

// let arr = [10,20,30,'rehan',11,15,42,47]

// let ansArray = arr.map((number,index) =>{
//     console.log(number+1);
//     console.log(index)
// })

// let ansArray2 = arr.filter((number) =>{
//     return number%2!==0;
//     //     return true;
//     // else
//     //     return  false;
// })

// console.log(ansArray2);

// let arr  = ['r','e','h','a','n'];

// let ans  = arr.reduce((acc,cur) =>{
//     return acc+cur
// })

// console.log(ans);

// let arr=[10,9,70,6,24,42]
// arr.sort((a,b)=>b-a)
// console.log(arr);

// let arr = [10,20,30,40,50];
// for(let value in arr){
//     console.log(value)
// }

// let getsum = (arr)=> {
//     let n = arr.length;
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }

// let ans = getsum(arr)
// console.log(ans)

// console.log(a)

// var a = 26;

// let arr  = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },function(a,b){
//         return a*b;
//     }
// ];

// let first =arr[2];
// let ans  = first(5,10);
// console.log(ans)

let obj = {
    age:24,
    name: "rehan",
    hight: 42,
    greet: ()=>{
        console.log("hello guys");
    }
}

console.log(obj.name);
obj.greet();
