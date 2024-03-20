try{
    num = prompt("Enter a number")
    if(isNaN(num)){
        throw "Enter a valid number"
    }
    if(num === ""){
        throw "cannot be empty"
    }
    console.log(num**2)
}
catch(error){
    console.log(error);
}
finally{
    console.log("bye");
}