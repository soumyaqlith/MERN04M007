let productArr = [
    {
        id: 1,
        title: "fan",
        description: "this is bajaj fan",
        price: 1600
    }, {
        id: 2,
        title: "cake",
        description: "this is cake",
        price: 600
    },
    {
        id: 3,
        title: "iron",
        description: "this is usha iron",
        price: 2000
    },
    {
        id: 4,
        title: "Ac",
        description: "this is samsong Ac",
        price: 60000
    },
    {
        id: 5,
        title: "Cooler",
        description: "this is samsong cooler",
        price: 50000
    },
    {
        id: 6,
        title: "fan",
        description: "this is fan",
        price: 50000
    }
]


productArr.forEach((obj) => {
    let card = document.createElement("div");

    card.innerHTML = `<p>Title :${obj.title}</p>
                    <p>Description :${obj.description}</p>
                    <p>Price :${obj.price}<p/>
                    <button class="bg-blue-600 p-3 rounded-4xl" onClick="handleAddToCart(${obj.id})">Add</button>
                    `
    card.style.cssText = "width:200px;height:300px;border:1px solid black";
    document.body.append(card);
})


let cartArr = []
function handleAddToCart(id) {
    cartArr.push(id);
    localStorage.setItem("cart", JSON.stringify(cartArr))
}


// addtocart page

function showAddToCartPage() {
    console.log("adding")
    let data = JSON.parse(localStorage.getItem("cart"))

}








// function 
// parts
//    => declaration
// =>name declaration
// => implementation
//    => calling


function func1(v, v2) {
    console.log("this is the function !");
    console.log(v, v2)
}

func1(90);


// types of function
// anonymous function
// named function
// function with expression
// nested function
// IIF
// higherorder function
// arrow function
// callback function

// function (){

// }
function namedFun() {
    console.log("this is the named function")
}
namedFun()

let exeFun = function () {
    console.log("this is the expression fun")
}
exeFun()

function parent() {
    console.log("parent func")
    function child() {
        console.log("child func");
    }
    return child;
}
parent()()


// (function(){
//     console.log("this is IIF")
// })()


// higher order function
let hof = function (func) {
    console.log(func)
}

hof(function () { })






let products = [
    {
        id: 1,
        name: "pragati  milk",
        price: 27,
        catagory: "Dairy"
    },
    {
        id: 2,
        name: "milky moo",
        price: 27,
        catagory: "Dairy"
    },
    {
        id: 3,
        name: "premium magic",
        price: 70,
        catagory: "Hookah"
    }

]
