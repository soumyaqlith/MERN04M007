
// asynchronous / synchronous
// console.log("first line")
// setTimeout(()=>{
// console.log("second line")
// },5000)
// console.log("third line")



// callback hell
// let getData=function(value,func){
//     setTimeout(()=>{
//         console.log("value :",value);
//         func()
//     },3000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// });


// promise
// let promise=new Promise((resolve,reject)=>{
//     // resolve("promise resolve")
//     reject("promise reject")
// });
// console.log(promise);

// let getData = function (value) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("success")
//             console.log("value :", value)
//         }, 2000)
//     })
// }
// console.log(getData(1));
// promise handle


// spread operator
// ...
let arr1=[1,2,3];
let arr2=[4,5,6];

let spreadValue=[...arr1,...arr2]   
console.log(spreadValue)

console.log(arr1.concat(arr2))

let obj1={
    x:2
}
let obj2={
    y:3
}

let spreadObj={...obj1,...obj2}
console.log(spreadObj)

// rest

let restFunction=(first,...arg)=>{
    console.log(first)
    console.log(arg)
}

restFunction(1,2,34,4,5);