console.log("Hello")
function sync(){
    console.log("step1");
console.log("step2");
console.log("step3");
}

sync()

setTimeout(()=>console.log("Step1"),1000)
setTimeout(()=>console.log("Step2"),3000)
setTimeout(()=>console.log("Step3"),5000)

console.log("bye")

for(let i =1; i<10; i++)
    console.log(i)

// setInterval(()=>console.log("Hi..."),2000)