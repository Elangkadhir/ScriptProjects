function greetConsole(name){
    console.log("Hello", name)   
}

function greetHeading(name){
    console.log("Hi, ", name);
}

function greet(callback){
    callback("Raju")
}

greet(greetConsole)
greet(greetHeading)

//For Each

ar= ['deepa', "jkka", "aklalsks"]

function print(val){
    console.log(val.toUpperCase());
}
ar.forEach(print)


ar.forEach(val =>console.log(val));


console.log(ar)

ar.forEach((val,index, ar)=>{
    ar[index] = val.toUpperCase()
})
console.log(ar)

ar2 = ['ece', 'it','eee']


ar2.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
})

list = ["CSE", "IT", "MECH", "CIVIL"]
list.forEach(val =>{
    const list = document.createElement("li")
    list.textContent = val
    document.getElementById('brnch').appendChild(list)
})

input = [6,-5,7,-2,4,6,-1]
let sum =0
input.forEach(val =>{
  if(val>0){
    sum+=val
  }
  
})

console.log("sum", sum)