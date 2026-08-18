function outerFunction(){
    let name = "Padakhu"
    function innerFunction(){
        console.log(name)
    }
    return innerFunction;
}

let inner = outerFunction();
inner();