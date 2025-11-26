console.log("today we are going learn DOM object");

// querySelctor("heading");
let h1 = document.querySelector("#head");
console.log(h1);

let divFirst = document.querySelector(".box");
console.log(divFirst);

let Firstp = document.querySelector("p");
console.log(Firstp);

let classes = document.querySelectorAll(".box");
console.log(classes);

console.log(divFirst.textContent);
divFirst.setAttribute("id", "headingId");
console.log(divFirst);
console.log(divFirst.getAttribute("class"))
