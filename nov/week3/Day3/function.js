console.log("today some special methods");
// every()
let arr = [1, 2, 3, 4, 2, 5, -1];
let isGreater = arr.every((v) => {
    return v > 0
})
console.log(isGreater);

// some()
let isgre = arr.some((v) => {
    return v > 0
})
console.log(isgre)

// find
let value = arr.find((v) => {
    return v === 2;
})
console.log(value);

let Lastvalue = arr.findLast((v, i) => {
    console.log("idex", i)
    return v === 2
})
console.log(Lastvalue)

let valueIdx = arr.findIndex((v) => {
    return v === 2
})
console.log(valueIdx);

// every()
// ----------------
// Check if all numbers are even:
let nums = [2, 4, 6, 8, "10"];

let isEven = nums.every(v => v % 2 === 0);
console.log(isEven)


// Check if all strings have length > 3:
let fruits = ["apple", "banana", "kiwi"]
console.log(fruits.every(v => v.length > 3));


// Check if all users are active (active = true):
let users = [
    { name: "A", active: true },
    { name: "B", active: true },
    { name: "C", active: false }
];

let isTrue = users.every((v) => {
    return v.active === true
})
console.log(isTrue)


// Check if all elements in an array are unique using only every().
//            0  1  2  3  4  5
let numArr = [1, 2, 4, 2, 3, 5];
// let obj = {}
// numArr.forEach((v) => {
//     if (obj[v]) {
//         obj[v] += 1
//     } else {
//         obj[v] = 1
//     }
// })
// console.log(obj)


console.log(numArr.every((v, i) => numArr.indexOf(v) === i))

// some()
// -----------------
// Check if any product is out of stock:

let products = [
    { name: "Pen", qty: 10 },
    { name: "Book", qty: 0 },
    { name: "Pencil", qty: 5 }
];

console.log(products.some(v => v.qty === 0));

// Find the first user with admin = true:

let listOfuser = [
    { name: "A", admin: false },
    { name: "B", admin: false },
    { name: "C", admin: true }
];

console.log(listOfuser.find(v => v.admin === true));



let numbersArr = [1, 2, 5, 3, 9, 6];
console.log(numbersArr.sort((a, b) => b - a));
 

// Math
// properties
console.log(Math.PI)
console.log(Math.SQRT2);  //
console.log(Math.SQRT1_2) //sqroot of 1/2
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


// function // methods
console.log(Math.max(1,2,4,50));
console.log(Math.min(1,2,3,4));
console.log(Math.round(1.200))
console.log(Math.floor(-4.5));
console.log(Math.ceil(4.3));
console.log(Math.random())
console.log(Math.pow(2,3));
console.log(Math.sqrt(40));
console.log(Math.cbrt(27));

console.log(Math.abs(2.313313313));


let obj={
    name:"qlith",
    age: 20,
    phone:2038989
}

delete obj.phone
console.log(obj);

Object.freeze(obj)
obj.age=40;
console.log(obj)

// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// console.log(Object.fromEntries([[1,1],[2,4],[3,9]]));

let x={
    a:1
}
let y={
    b:4
}
// console.log(Object.assign(x,y))
// console.log(x)








