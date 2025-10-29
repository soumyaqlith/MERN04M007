console.log("today is the second class of operator")


// console.log((3+4)-5); 
let obj={
    name:"xyz"
}

// console.log(obj.age)

// console.log([] == []);
// console.log(undefined == undefined)
// console.log(null == null)
// console.log(undefined == {})
// console.log(null == {})
// console.log(undefined === null)


console.log(false && "it is true");


// if(condition){
     // statement
// }


if(2){
    console.log("this is execute only if the condition is true")
}else{
console.log("this is execute if cond is false")
}

// if(true)
//     console.log(first)

if(false){

}else if(false){

}else{

}

//  cond  ? "if true" :"if false"

console.log(null ? "it is true":"it is false")

if(undefined){
    console.log("it is 2")
}

let a=2;
if((a>1) && (a++<4)){
    console.log("true",a)
}else{
    console.log("false",a)
}

// const number=prompt("Enter your age")
// console.log(number)


// const score=prompt("Enter your score");
// console.log(score)

// if(score>=80 && score<=100){
//     console.log("A grade")
// }
// else if(score>=70 && score<=79){
//     console.log("B grade")
// }
// else if(score>=60 && score<=69){
//     console.log("C grade")
// }
// else if(score>=50 && score<=59){
//     console.log("D grade")
// }
// else if(score >=0 && score<=49){
//     console.log(" F grade")
// }else{
//     console.log("Invalid Score")
// }

const Option="b"
switch (Option) {
    case "c":
        console.log("this is c")
        break;
    case "b":
    console.log("this is b")
    break;

    default:
        break;
}