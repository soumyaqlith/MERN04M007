console.log("We are going to clear the doubt");

let arr = [1, 2, 3, 4];
// for (let v of arr) {
//     console.log(v)
// }

arr.forEach((val, i) => {
    console.log(val, i)
})
let newArr = arr.map((v, i) => {
    return v * 2
})

console.log(newArr)
console.log(arr)


let evenArr = arr.filter((v) => {
    return v % 2 === 0
})

console.log(evenArr);

let sum = arr.reduce((accu, c) => {
    return accu + c;
}, 0);
console.log(sum);


// let isEven = arr.some((v) => {
//     return v % 2 == 0
// })
let isEven = arr.every((v) => {
    return v % 2 == 0
})

console.log(isEven);


// dom

// let button = document.getElementById("btn");
// console.log(button);

// let p = document.getElementsByClassName("para");
// console.log(p)

// let paras=document.getElementsByTagName("p");
// console.log(paras);


// let button = document.querySelector("#btn");
// console.log(button)

let p = document.querySelectorAll(".para");
console.log(p);

// event
let btn = document.getElementById("btn");
console.log(btn);

// btn.addEventListener("click", () => {
//     console.log("btn clicked");
// })

// btn.addEventListener("dblclick",()=>{
//     console.log("btn double click")
// })


// btn.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })
// btn.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })
// btn.addEventListener("mouseenter", () => {
//     console.log("mouse enter");
// })

// btn.addEventListener("mouseleave",()=>{
//     console.log("mouse leave")
// })
btn.addEventListener("mousemove", () => {
    console.log("mouse move");
})

// document.addEventListener("keydown", () => {
//     console.log("keydown");
// })
// document.addEventListener("keyup", () => {
//     console.log("key up");
// })
// document.addEventListener("keypress", () => {
//     console.log("key press");
// })

let v = 20




