function addTwo(num: number): number{
     return num + 2
    //return "hello" this will trigger an error since its not a number.
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("joshua")

signUpUser("joshua", "josh_billion@yahoo.com", false);
loginUser("joshua", "josh_billion@yahoo.com");

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errormsg: string): void{
    console.log(errormsg);
    
}
function handleError(errormsg: string): never{
    throw new Error(errormsg);
    
}

export {}