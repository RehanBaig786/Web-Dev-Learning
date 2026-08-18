let fpara = document.getElementById('content1')
let originalText = fpara.textContent
let changedText = "have a Good Day.....!!!!"
function changeText(){
    if (fpara.textContent === originalText) {
        fpara.textContent = changedText;
    } else {
        fpara.textContent = originalText;
    }
}

fpara.addEventListener('click',changeText);
// fpara.addEventListener('dblclick',PrevText);

let a = document.getElementById("number1");
let b = document.getElementById("number2");
let btn = document.getElementById("AddMe");
let spara = document.getElementById('spara');

function ADDITION(){
    let sum = parseInt(a.value)+parseInt(b.value);
    spara.textContent = "summation is: "+sum
}

btn.addEventListener('click', ADDITION)

// function alertpara(event){
//         alert("You have clicked para "+event.target.textContent);
//     }

// let paras = document.querySelectorAll('p')
// for(let i=0;i<paras.length;i++){
//     let para = paras[i]
//     para.addEventListener('click',alertpara)
// }

// for(let para of paras){
//     para.addEventListener('click' , function(){
//         alert("you have clicked: "+para.textContent)
//     })
// }

// let myDiv = document.getElementById("wrapper");

// document.addEventListener('click' , alertpara);