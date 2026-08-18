// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("how are you guys...??");
//         resolve();
//     },1000)
    
// })

// promise1.then(function(){
//     console.log("first task is done..!!!");
//     console.log("Any next task to complete??");
//     console.log('------------------------------------------------- 1 sec')

// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("this is 2nd Task..!!");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("2nd task is also completed..!!!")
//     console.log('------------------------------------------------- 1 sec')

// })  

// const  promise3 = new  Promise(function(resovle,reject){
//     setTimeout(function(){
//         console.log("running 3rd task...")
//         resovle({UserName : "rehan", Email:"rehan@example.com"})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
//     console.log('------------------------------------------------- 1 sec')
// })

// const promise4 =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = true;
//         console.log("this is fourth task-->")
//         if(!err){
//             resolve({username:"Baig Sab", password:"1234"})
//         }else{
//             reject('something went wrong.!!');
//         }
//     },1000)
// })

// promise4.then((user)=>{
//     console.log(user)
//     return user.username;
// }).then((username)=>{
//     console.log("UserName is: " +username)
//     console.log('------------------------------------------------- 5 sec')
// }).catch((e)=>{
//     console.log(e);
//     console.log('------------------------------------------------- 5 sec')
// }).finally(()=> {
//     console.log("the promise4 is either resolved or rejected..!!!")
//     console.log('-------------------------------------------------')
// })

// const promise5 =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = true;
//         console.log("this is fifth task-->")
//         if(!err){
//             resolve({username:"javascript", password:"1234"})
//         }else{
//             reject('Error: JS went wrong.!!');
//         }
//     },1000)
// })

// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise5()

// async function getAllUsers() {
//     try {
//          const response = await fetch('https://jsonplaceholder.org/users')
//         const data  = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: "+e)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.org/users')
.then((response) => response.json())
.then((data)=>{
    console.log(data)
    return data.map(user => user.login.username);
})
.then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log("something went  wrong")
})
.finally(()=>{
    console.log('-------------------------------------------------')
    console.log("this will always executed")
    console.log('-------------------------------------------------')
})