let a = 100;

function fun1(){
    console.log("a is ",a);
}

fun1()

// returning function - higher order function
// lexical scoping - inner variable can access outer variable
function outer(name){
    let outerVariable = "bread"
    function inner(){
        let innerVariable = "Butter"
        console.log("innerVariable", innerVariable)
        console.log("a is ",a);
        console.log("outerVariable", outerVariable)
        console.log("hi", name)
    }
    return inner
}

// outer() // no output
// inner() // error - not defined

let call1 = outer("Kadhir")
call1()

let call2 = outer("ELA")
call2()

function makeAdder(x){
    return function(y){
        return x+y
    }
}

let add5 = makeAdder(5)

console.log(add5(5))

let add100 = makeAdder(100)
console.log(add100(20))
console.log(add100(40))
console.log(add5(29));