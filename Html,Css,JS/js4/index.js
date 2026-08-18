
// const t1 = performance.now();
// //code 1
// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent  = "this is para" +i;
//     document.body.appendChild(para)
// }

// const t2 = performance.now();

// console.log("the time taken to run code1: " +(t2-t1))


// //code 2

// const t3 = performance.now();
// let  myDiv = document.createElement('div')

// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent  = "this is para" +i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("the time taken to run code2: " +(t4-t3))

//best code

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "thie is para: " +(i+100);
    //no reflow and repaint is taken by below line
    fragment.appendChild(para);
} 
document.body.appendChild(fragment);
