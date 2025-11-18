console.log("Today we are going to learn rest part of function");

// arrow function
let arrowFun = () => {
    console.log("this is the arrow function");
}

arrowFun()

//    higher order function
// It is a function which is accepting a function as a parameter and it is returning a function

let add = (a, b = 0) => {
    console.log("addition", a + b)
}
add(10,30)

// for accepting
let hof = function (fun) {
    fun()
}
hof(() => { console.log("kjhjhh") })

// return
let returnHof = function () {
    let child = function () {
        console.log("this is child function")
        return 10
    }
    return child;
}

let childFunReturnValue = returnHof()()
console.log(childFunReturnValue)

// the function which is used as a argument at the time function calling is known as callback function
//  mostly we will use arrow function as callback function

// IIF 
// (function(){
//     console.log("IIF function");
//     return ()=>{console.log("nexted fun")}
// })();

function print() {
    console.log("Qlith")
}

print()


// Array specific method
// forEach , map ,filter ,reduce ,find ,some ,every,sort

// forEach
let arr = [1, 2, 3, 4, 5];
// for(let v of arr){
//     console.log(v)
// }


arr.forEach((v, i) => {
    console.log(i, "value :", v)
})


// map
// let updateArr=[]
// for(let v of arr){
//     updateArr.push(v+2)
// }

let newArr = arr.map(v => {
    return v + 2;
})
console.log(newArr)

// flter function
let filterArr = arr.filter(v =>
    v % 2 == 0
)
console.log(filterArr);


// reduce method 
let additionValue = arr.reduce((sum, v) => {
    return sum + v
}, 0)

console.log("summation :", additionValue)

let mult = arr.reduce((mult, v) => mult * v, 1);
console.log("multiplication :", mult);




