let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let para = document.getElementById("para")
let btn = document.getElementById("btn")



btn.addEventListener('click', ()=>{
    let newText = "Fullname is: "+fname.value+" "+lname.value;
    console.log(newText)
    if(fname.value.trim() === "" || lname.value.trim() === ""){
        alert("Data is not filled completely..!!")
    }else{
        para.textContent = newText;
        para.style.color = "green"
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
    }
    
})

