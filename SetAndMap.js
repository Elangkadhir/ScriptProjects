let arr = [1,1,1,2,3,5,3,34,5,6,66,7,7,7,1,8,9,2]
let myarr = new Set(arr)

console.log(arr)
console.log(myarr)

let myarr2 = new Set()

myarr2.add(3)
myarr2.add(5)
myarr2.add(7)
myarr2.add(9)
myarr2.add("a")
myarr2.add({a:1, b:2})

console.log(myarr2)

let obj = {a:1, b:2}
myarr2.add(obj)
console.log(myarr2);
console.log(myarr2.size);

console.log(myarr2.has(5));
console.log(myarr2.delete(122));
 
let ar = Array.from(myarr2)
console.log(ar)

// map
// map objects are collections of key-value pairs
// A key in the map may only occur once
// key or value can be object

let map1 = new Map()
map1.set("a",1)
map1.set("a",5)
map1.set("b",2)
map1.set("c",3)
console.log(map1)


for(let i of map1){
    console.log(i)
}

for(let [k,v] of map1){
    console.log(v)
}

for(let k of map1.keys()){
    console.log(k)
}

map1.forEach((v,k)=>{
    console.log("key")
})