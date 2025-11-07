// 1.Write a program to count the number of vowels in a string.

let stringWithVowel = "this is the qlith";
let smallLetter = stringWithVowel.toLowerCase();
let vowelCount = 0;
for (let v of stringWithVowel) {
    if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
        vowelCount++
    }
}
console.log("vowel :", vowelCount)

// 2.Reverse a string without using built-in reverse methods.
let originalString = "this is the qlith Innovation";
let reverseString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
    reverseString = reverseString + originalString[i];
}
console.log("reverse string : ", reverseString)



// 3.Check if a string is a palindrome.
let originalString1 = "121";
let reverseString1 = "";

for (let i = originalString1.length - 1; i >= 0; i--) {
    reverseString1 += originalString1[i]
}
if (originalString1 === reverseString1) {
    console.log("this string is pallindrom")
} else {
    console.log("this string is not a pallindrom")
}

//  4.Convert the first letter of each word in a sentence to uppercase.

let convertString = "hello tunguru bholo";
let afterUpperCase = convertString.toUpperCase()
let convertStringArr = afterUpperCase.split(" ");
// console.log(convertStringArr)

let afterConvert = "";
for (let v of convertStringArr) {
    afterConvert = afterConvert + " " + (v[0] + v.slice(1, v.length).toLowerCase());
}

console.log(afterConvert)


// 6.Replace all spaces in a string with -.
let withSpaceString = "this is my cat";
console.log(withSpaceString.replaceAll(" ", "-"))

// 7.Extract the first 5 characters of a string.
let mainString = "QlithInnovation";
console.log(mainString.slice(0, 5));

// 8.Concatenate two strings without using + or template literals.
let str1 = "tunguru";
let str2 = "bholo";
console.log(str1.concat(str2))

// 9.Check whether a string starts with "Hello" and ends with "World".
let checkString = "Hello my coding World";

// let checkStringArr = checkString.split(" ");
// // console.log(checkStringArr)

// if (checkStringArr[0] === "Hello" && checkStringArr[checkStringArr.length - 1] === "World") {
//     console.log("yes true")
// } else {
//     console.log("false")
// }


if(checkString.startsWith("Hello") && checkString.endsWith("World")){
    console.log("true")
}else{
    console.log("false")
}

// 10.Replace all occurrences of "Java" with "Python" in "I love Java Java".
let beforeReplace="I love java java";
console.log(beforeReplace.replaceAll("java","python"));

// 11.Split a sentence into an array of words and print the longest word.
let beforeChecking="rain in spain . damburudamburu My cat name damburu";
let convertIntoArr=beforeChecking.split(" ");
console.log(convertIntoArr)

let maxString=convertIntoArr[0];
for(let v of convertIntoArr){
    if(maxString.length < v.length){
        maxString=v;
    }
}

console.log(maxString)