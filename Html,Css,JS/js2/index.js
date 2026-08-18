// class Student{
//     //propertires
//     age = 24;
//     name = "rehan";
//     gender = "male";
//     #weight = 60;

//     //behaviour
//     walking() {
//         console.log(this.name, "walking");
        
//     }

//     running(){
//         console.log(this.name, "running");
//     }
// }

// let st1 = new Student()
// console.log(st1.#weight);
// st1.running();

// function getSum(a,b){
//     return a+b;
// }

// function Summation(a=4,b=7,sum=getSum(a,b)){
//     console.log(a,"+",b,"=",sum)
// }

// Summation(2,5)

//object cloning:
let src = {
    age:24,
    name:"rehan",
    ht:190,
    wt:60
}

// let des = {...src}

let des = Object.assign({},src)

src.age = 28;

console.log("src:", src)
console.log("des:", des)


