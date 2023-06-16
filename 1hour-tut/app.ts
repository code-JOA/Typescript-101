let variable : 'hello'

variable = 'hi'

let age = 18 

let agewithtype :  number;

// agewithtype = 'eighteen'

agewithtype = 18

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

let testStringNumberArray : string | number []