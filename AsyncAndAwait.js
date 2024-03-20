// async function fn(){
//     return "Hello"
// }

// console.log(fn());

// fn().then((msg)=>console.log(msg))

let reachB = new Promise((resolve, reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve, 3000,"Ela reached")
    else
        reject("Ela not reached")
})

async function asyncfun(){
    console.log("hi.....")
    await reachB
    console.log(reachB);
    console.log("bye");
}

asyncfun()