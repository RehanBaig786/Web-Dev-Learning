const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = 'https://jsonplaceholder.org/users'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/todos/201'

const  options = {
    method: "POST",
    body: JSON.stringify({
        userId: 2, 
        id: 200, 
        title: 'Indian national anthem', 
        completed: false }),
    headers:myHeaders,
};

async function getData() {
    const response = await fetch(url3)
    let data = await response.json();
    console.log(data);
}

async  function postData(){
    const response = await fetch(url2, options)
    let data = await response.json();
    console.log(data);
}

async  function processData(){
    await postData();
    await getData();
}

processData();