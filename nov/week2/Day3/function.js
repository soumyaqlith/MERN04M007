// Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].
let strArr = ["React", "Node", "MongoDB"];
let strNum = [];
for (let v of strArr) {
    strNum.push(v.length)
}
console.log(strNum);

let numArr = [4, -2, 6, -9, 7];
for (let i = 0; i < numArr.length; i++) {
    // if (numArr[i] < 0) {
    //     numArr[i] = 0
    // }

    if(numArr[i]<0){
        numArr.splice(i,1,0);
    }
}

console.log(numArr)


let nameOFC="QLITH";
// let afterSplit=nameOFC.split("");
// let reverse=afterSplit.reverse();
// console.log(reverse.join(""))
console.log(nameOFC.split("").reverse().join(""));



// function in javascript
// function are the block of code which perform a specific task  
//    we can reuse the function
//  function has two parts
    //  => declaration  (implementation)
    //  =>calling or invocation
    
//  we can create a function by using function reserve key word
// types of function
//      =>anonymous function (it is function which has no name)
//      => named function     (it is function which has some name)
//      =>expressional function (it is function which is in the form of expression)
//      =>higher order function  (it is function which will accept a function as a argument , and which will return a function)
//      =>callback function  (it is a function which is used as argument )
//      =>IIf (imidiate invoke function) (it is function which has direct declaration and instant invocation or calling)

// we can call a function by using parantesis ()
//  the value which are passed at the time of declaration are called as parameter
//  the values or variable which are passed at the time of invokation are called a arguments



