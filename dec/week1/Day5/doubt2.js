// Event
let p = document.querySelector("p");
console.log(p)


// p.addEventListener("dblclick",()=>{
//     console.log("paragraph clicked")
// })

// mouse

// p.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })

// p.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })

// p.addEventListener("mousemove",()=>{
//     console.log("mouse move")
// })


// document.addEventListener("mouseover",()=>{
//     console.log("mouse over")
// })


// keys
// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })


// document.addEventListener("keypress",()=>{
//     console.log("keypress")
// })


let input = document.querySelector("input");
console.log(input)

// input.addEventListener("input",()=>{
//     console.log("input")
// })

// input.addEventListener("change",()=>{
//     console.log("input change")
// })
// input.addEventListener("focus",()=>{
//     input.style.backgroundColor="green"
// })
// input.addEventListener("blur",()=>{
//     input.style.backgroundColor="green"
// })

let form = document.querySelector("form");
// form.addEventListener("submit",()=>{
//     console.log("form submitted")
// })


window.addEventListener("DOMContentLoaded", () => {
    console.log("load")
})

// window.addEventListener("scroll",()=>{
//     console.log("scroll")
// })

// window.addEventListener("resize",()=>{
//     console.log("resize")
// })


// event object
p.addEventListener("click", (e) => {
    console.log(e)
})

// p.addEventListener("mousedown",(e)=>{
//     console.log(e)
// })

input.addEventListener("input", (e) => {
    console.log(e)
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
})

document.addEventListener("keydown", (e) => {

    console.log("e.key", e.key)
    console.log("e.keyCode", e.keyCode)
    console.log("e.altKey", e.altKey)
    console.log("e.ctl", e.ctrlKey)
})



let div = document.querySelector("div");


let p1 = document.createElement("p");
p1.innerText = "this is paragraph";

let b = document.createElement("b");
b.innerText = "this is paragraph";


// div.appendChild(p1)
// div.appendChild(b)

// div.append(p1,b)

// div.prepend(p1)

div.after(p1)

var name = "yyy";

let obj = {
    name: "zzz",
    print: function () {
        console.log(this.name)
    }
}

obj.print()
