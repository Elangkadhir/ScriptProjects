import Car,{fillGas, repair} from "./Modules.js";
// let user1 = {
//     name : "Kadhir",
//     age : 24,
//     login(){
//         console.log("Hi", this.name);
//         console.log("Logged in");

//     },
//     logOut(){
//         console.log("You are logged out");
//     }
// }

// let user2 = {
//     name : "Ela",
//     age : 24,
//     login(){
//         console.log("Hi", this.name);
//         console.log("Logged in");

//     },
//     logOut(){
//         console.log("You are logged out");
//     }
// }

// let user3 = {
//     name : "Elanga",
//     age : 24,
//     login(){
//         console.log("Hi", this.name);
//         console.log("Logged in");

//     },
//     logOut(){
//         console.log("You are logged out");
//     }
// }

// user3.login();

// class User{ // base or parent or super
//     static numberofUsers = 0;
  
//     constructor(name, age){
//         //instance variables
//         this.name = name;
//         //username
//         this.age = age;
//         //userage

//         User.numberofUsers++;

//     }
//     login(){
//         console.log("Hi", this.name);
//         console.log("Logged in");

//     }
//     logOut(){
//         console.log("You are logged out");
//     }
//     static displayUsers=()=>{
//         console.log("numberofUsers", User.numberofUsers);
//     }
// }

// let userOne = new User("Virat", 21)
// let userTwo = new User("Virat", 35)
// let userThree = new User("Virat", 35)

// let music = new String("ARR")

// console.log("no. of. users", User.numberofUsers);
// User.displayUsers()

// //inheritance

// class paidUsers extends User{ //derived or child or sub
//     constructor(name,age){
//         // this.name = name;
//         // this.age = age;
//         super(name,age)
//         this.storage = 100;
//     }
//     message(){
//         console.log("you have 100gb free storage")
//     }
//     // overriding
//     login(){
//         console.log("Thanks");
//         return this
//     }
// }

// let paidUser1 = new paidUsers("Kd", 25)
// paidUser1.login()

// //method chaining

// paidUser1.login().message() 

function Subs(name, age){
    this.name = name
    this.age = age


}

Subs.prototype.login = function(){
    console.log("hi", this.name);
    console.log("you are logged in")
}


let subsone = new Subs("karim", 34)
subsone.login()

class Temperature{
    constructor(temp){
        this._temp = temp

    }

    get temp(){
        return this._temp
    }

    set temp(temp){
        this._temp=temp
    }
}

let temp1 = new Temperature(25)

let car1 = new Car()

car1.drive()
car1.fillGas()