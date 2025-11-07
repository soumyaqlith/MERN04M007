console.log("Today we are going to learn String method");
let str="Hello";
console.log(str[0])

// methods
// to get the indexing values
console.log(str.at(0))
console.log(str.charAt(1))

// string interpolation
let animal="dog"
console.log(`this is :${animal}`);

let url="https://www.qlith.com"
console.log(`${url}/login`);


// concat
console.log("hello hye "+ 30);
console.log("hello ".concat(30))

let str1="Qlith";
console.log(str1.length)
console.log(str1.trim())
console.log(str1)

// console.log(str1.trimEnd())
// console.log(str1.trimStart())


// replace method
console.log(str1.replace("l","L"));
console.log(str1)

let desc="this is my cat .his name is poppy cat . my cat has two baby cat ."
console.log(desc.replaceAll("cat","dog"));


let num=20;
console.log(num)
console.log(num.toString())

// slice method

let string="bluetooth,automaticdriving,sunroof,autoSongChange,AutoDoor";
console.log(string.slice(2,6));
console.log(string.slice(2));
console.log(string.slice(4,2))  // starting index < ending index
console.log(string.slice(5,6))
console.log(string.slice(-4,-2))

let strArr=string.split(",");
console.log(strArr)

