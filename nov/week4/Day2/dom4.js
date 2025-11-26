console.log("today we are going to learn how to create element by using js");

// createElement();
let h1 = document.createElement("h1");
h1.innerText = "this is heading";
// h1.classList.add("heading")
h1.className = "heading"
console.log(h1);

// document.body.appendChild(h1)


let div = document.getElementById("box");
// div.appendChild(h1)

let p = document.createElement("p");
p.innerText = "this is the paragrapgh";

let b = document.createElement("b");
b.innerText = "this is the bold tag";

// div.appendChild(p)
div.append(h1, p, b);


let h5 = document.createElement("h5");
h5.innerText = "this is heading 5";

div.prepend(h5);

let i = document.createElement("i");
i.innerText = "this is italic word";

// div.before(i)
div.after(i);


let imageContainer = document.createElement("div");
imageContainer.style.cssText = "width:300px;height:300px;border:1px solid black;background-color:red";

let img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
img.style.cssText = "width:100%;height:100%";

imageContainer.append(img);

document.body.append(imageContainer);


// events
let clickedFunc = () => {
    console.log("button clicked")
}

let btn = document.getElementById("btn");
btn.onclick = () => {
    console.log("id btn clicked")
}

// pointer.addEventListener(event_name,event_handlding_function,propagation_type)

let button = document.getElementById("btn_1");
button.addEventListener("click", () => {
    console.log("addevent listener btn execute");
}, false);


document.querySelector(".images").addEventListener("click", () => {
    console.log("parent ul click");
})


let catImg = document.getElementById("catimg");
catImg.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("cat image clicked");
})

