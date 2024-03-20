// API- Application programming interface

fetch("https://official-joke-api.appspot.com/jokes/programming/random")
.then((res)=> res.json())
.then((msg)=>console.log(msg[0].setup, msg[0].punchline))
.catch((err)=>console.log("error"))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId : 22,
        id:345,
        title:"test",
        completed:false
    })
})
.then(response => response.json())
.then(json => console.log(json))