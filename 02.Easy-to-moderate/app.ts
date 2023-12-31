let variable = "hello";

variable = "hi";

let age = 18;

let ageWithType: number;
// ageWithType = 'eighteen'
ageWithType = 18;

let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = true;

// union types
let testStringOrNumber: string | number;

testStringOrNumber = "joshua";
testStringOrNumber = 18;

// array
let names = ["josh", "giulia", "killo"];

names.push("nicko");

let numbers = [12, 13, 14];
numbers.push(92);

// here we want an array with only strings
let testStringArray: string[];

// testStringArray = [1,2,3] this will throw an error
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];
// testNumberArray = [true] this will throw an error
// testNumberArray = [true, 'hi' , 23]
testNumberArray = [12, 13, 14];

let testStringNumberArray: (string | number)[];
testStringNumberArray = [1, "two", 3];

// OBJECTS

let user = {
  username: "josh",
  age: 25,
  isAdmin: false,
};

user.username = "jane";
// user.age = 'eighteen' error since age is a number
user.age = 23;
user.isAdmin = true;

// user.phone = '+12345'

//  here we are specifically listing what we want
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "joshua",
  age: 25,
  isAdmin: true,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  // here we want to say phone is not required
  phone?: string;
};

userObj2 = {
  username: "giulia",
  age: 23,
  isAdmin: false,
  phone: "+123456",
};

//  Any
let testAny: any;
testAny = 12;
testAny = "Hello";
testAny = true;
testAny = {};
testAny = [true];

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];

//  functions

let sayHi = () => {
  console.log("Hi, welcome");
};

let functionReturnString = () => {
  // console.log("Hi")  note functions must always return something
  return "Hello";
};

let multiply = (num: number) => {
  return num * 3;
};

//  same as the above. however we are specifying to return a number here.
let multiple = (num: number): number => {
  return num * 2;
};

let multiple2 = (num: number): void => {
  // return num * 2; do something but dont return anything hence void
};

//  so here we are saying add two numbers and return another number
let sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
sum(2, 4);

let sum2 = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};
sum2(2, 4);

let func = (user: { username: string; age: number; phone?: string }) => [
  console.log(user.username),
];

//  type aliases we use this so we dont have to specify the Type as we
// did in the above functions

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

//  lets create prototype function to create other functions

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type userType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: userType2 = {
  username: "john",
  age: 43,
  theme: "dark",
};

//  interfaces

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "josh",
  email: "josh@gmail.com",
  age: 25,
  employeeId: 1,
};

const client: IUser = {
  username: "josh",
  email: "josh@gmail.com",
  age: 43,
};

//  generics

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEventBetter<T extends object> {
  id: 1;
  title: "post title";
  desc: "post desc";
  extra: ["str", "str2"];
}

const testMe2: IPostBetter<{ id: number; username: string }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "josh" }],
};

const testMe3: IPostBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "josh" }],
};

const testMe4: IPostBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};
