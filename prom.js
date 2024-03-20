const tatkalBook = new Promise((resolve, reject) => {
    let bookingSuccess = true
    if (bookingSuccess)
        resolve(850)
    else
        reject()
})

tatkalBook.then((amt) => console.log(`"thanks buddy" ${amt}`))
.catch(() => console.log("Book bus"))

function Book(){
   return new Promise((resolve, reject) => {
        let bookingSuccess = true
        if (bookingSuccess)
            resolve(850)
        else
            reject()
    })
}

function tossCoin(){
    return new Promise((resolve, reject) => {
     const random =    Math.floor(Math.random()*2)
    

    if(random==0){
        resolve()

    }
    else{
        reject()
    }
})
}

tossCoin()
.then(()=>console.log("you won"))
.catch(()=>console.log("you lost"))

let reachA = new Promise((resolve, reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve, 3000,"Kadir reached")
    else
        reject("kadir not reached")
})

let reachB = new Promise((resolve, reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve, 1000,"Ela reached")
    else
        reject("Ela not reached")
})

let reachC = new Promise((resolve, reject)=>{
    const reached = false
    if(reached)
        setTimeout(resolve, 2000,"ELanga reached")
    else
        reject("ELanga not reached")
})


Promise.race([reachA, reachB, reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
