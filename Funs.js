function isPositive(num){
    return num>0
}
console.log(isPositive(-22))
console.log(isPositive(22))

function sayHello(){
    console.log("Hello")
}

sayHello()

function findProduct(a,b){
    return a*b
}

console.log(findProduct(27,100))
console.log(findProduct)
console.log(typeof findProduct)

function greet(name = "there"){
    console.log("hi", name);
}

greet("Kadhir")
greet()


//recursion

function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}

console.log(factorial(3))

// function expression

let isEven = function(num){
    return num>0
}

console.log(isEven(20));

let arr = [1,4,5,6,7,8,9,10]

let findSum = function(arr1){
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}

console.log(findSum(arr))

const volume = (l,b,h) =>{
    return l*b*h
}

console.log(volume(1,2,3));

const sumOfArray = (arr) =>{
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}

console.log(sumOfArray(arr));

const Area = (r) =>{
    return Math.PI*r*r
}

console.log(Area(1));

//variable args

const prod = function(...args){
    let result = 1

    for(let val of args){
        result*=val

    }
    return result
}

console.log(prod(7,10,10))

let prod2 = function(){
    let result = 1
    for(let i=0; i<arguments.length; i++){
        result *= arguments[i]

    }

    return result
}

console.log(prod2(5,5,5))

//Generators

function* indexGenerators(){
    let index = 1
    while(true){
        yield index++
    }
}

const gen = indexGenerators();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)