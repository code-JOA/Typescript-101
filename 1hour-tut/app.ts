let variable = 'hello';

variable = 'hi'

let age = 18 

let ageWithType :  number;
// agewithtype = 'eighteen'
ageWithType = 18

let testString : string 
testString = "hello"

let testBoolean : boolean 
testBoolean = true

// union types
let testStringOrNumber: string | number

testStringOrNumber = 'joshua'
testStringOrNumber = 18

// array
let names = ['josh', 'giulia' , 'killo']

names.push('nicko')

let numbers = [12,13,14]
numbers.push(92)

// here we want an array with only strings
let testStringArray : string[]

// testStringArray = [1,2,3] this will throw an error
testStringArray = ['one', 'two' , 'three']

let testNumberArray : number[]
// testNumberArray = [true] this will throw an error 
// testNumberArray = [true, 'hi' , 23]
testNumberArray = [12,13,14]

let testStringNumberArray : (string | number)[]
testStringNumberArray = [1, 'two', 3]

// OBJECTS

let user = {
    username : 'josh',
    age: 25,
    isAdmin: false
}

user.username = 'jane'
// user.age = 'eighteen' error since age is a number
user.age = 23
user.isAdmin = true

// user.phone = '+12345'

let userObj : {
    username: string;
    age: number;
    isAdmin: boolean;
}

userObj = {
    username: 'joshua',
}
