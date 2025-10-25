console.log("today we are going to learn variable");

let a=10;
console.log(a)

let A=20;
console.log(A)

let a1=10;
console.log(a1)

let _=50;
console.log(_)

let $=60;
console.log($)

let $name1="here store some one name"
console.log($name1)

// let console=300;
// console.log(console)



// var
// let
// const

// var 
// declaration
//! declaration at global level
var name="xyz"
console.log(name)

{
    console.log(name)
}

function access(){
    console.log(name)
}

access()


// if i declare the variable in global level any where i can access the variable (that may be var ,may be let ,may be const)


//!  declaration at block level
 {
    var email="xyz@gmail.com"
    console.log(email)
 } 

 console.log(email)

//  if i declare a variable in block level i can access inside block , i can access out side from the block , i can access inside the function

// ! declaration at function level

function declaration_variable(){
  var pass="123a";
  {
    console.log(pass)
  }
  console.log(pass)
}

// console.log(pass)
// {
//     console.log(pass)
// }

declaration_variable()

// if i declare a variable in function level we can access the variable inside the function only
    //  i can not access the variable out side from the function



  // let
//   declaration

// !declaration at global level

let fullName="fakir";

console.log(fullName)

// if i declare the variable inside the global level using let keyword we can access the variable in any where


// ! declaration at block level

{
    let nickName="tunguru";
    console.log(nickName)
}

console.log(nickName)

// if i declare the variable inside the function ,we can access the variable inside the function ,we can't access the variable outside from the function (because of let restriction)


// ! declaration at function level

function declare_functionlevel(){
    let bottol="water";
    console.log(bottol)
}

declare_functionlevel()

// if i declare the variable inside the function by using the let key word only we can acess the variable inside the function only , we can't access the variable outside the function

// const 
// declaration
// ! global level declaration
const veg="potato";
console.log(veg);

// if i declare the variable inside the global level using const keyword i can access the variable in any where

// !declaration at block level
{
    const flower="lily";
    console.log(flower)
}

// if i declare the variable using const keyword inside the block level ,we can access the variable inside the block only ,we con't access the const variable out side from the block


// ! declaration at function level

function declare_functionLevel_Const(){
    const animal="cat rabbit";
    console.log(animal)
}

declare_functionLevel_Const()


// if i declare the variabel inside the function using const key word ,i can only access the variable inside the function , i cant access the variable outside from the function



// the way of declaration









