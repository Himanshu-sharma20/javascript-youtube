//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// two types of memory Stack and Heap

// stack(primitive) ,Heap(Non-primitive)

//Example of  stack
let myYoutunename="hiteshchoudhrydotcom"
let anothername= myYoutunename

anothername="chaiaurcode"

// console.log(myYoutunename);
// console.log(anothername);


//Example of Heap memory
 let userOne ={
    email: "user@google.com",
    upi: "xyz@ybl"

 }

let userTwo = userOne;

 userTwo.email="Hitesh@google.com"


 console.log(userOne.email);// Hitesh@google.com    
 console.log(userTwo.email); //Hitesh@google.com The output is same because the same  referece is given to userTwo