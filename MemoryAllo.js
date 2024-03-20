let bigNum = 94884743473479840949n;

let bigNum2 = BigInt(948847434734798409491n)
 

let obj1 = {name : "Kadhir", age : 24}
console.log("obj1", obj1);

let obj2 = obj1

obj1.age = 25

console.log("obj1", obj1);
console.log("obj2", obj2);

obj2.name = "Ela"
console.log("obj2", obj2);
console.log("obj1", obj1);
