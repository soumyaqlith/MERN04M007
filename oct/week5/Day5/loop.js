

// let a={};
// let b=a

// console.log(a==b)

// console.log(0 === undefined)


// for-in     /     for-of

let arr = [1, 2, 3, 4, 5];

// for (let idx = 0; idx <= arr.length - 1; idx++) {

//     console.log(idx + ":", arr[idx]);
// }

for(let i in arr){
    console.log(arr[i])
}


let obj={
    name:"tunguru",
    age:"30",
    email:"tunguru@gmail.com",
    password:"tunguru123",
    arr1:[6,7,8,9]
}


for(let key in obj){
    console.log(key , obj[key])
}



// for(let v of obj){
//     console.log(v)
// }

for(let v of obj.age){
    console.log(v)
}



let numArr=[1,2,3,4,5,6,7,8,9];
// for(let v of numArr){
//     if(v==5){
//         break;
//     }
//     console.log(v)
// }
for(let v of numArr){
    if(v==5){
        continue;
    }
    console.log(v)
}



const stdObj={
    fullName:"Rojalin",
    phone:3812830,
    email:"rojalin@gamil.com"
}

console.log(stdObj.fullName)

stdObj.fullName="samir"; // re-intialization
console.log(stdObj.fullName)

// stdObj={
//     fullName:"abhaya"
// }

// console.log(stdObj.fullName)

