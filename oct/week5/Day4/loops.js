console.log("Today we are going to learn Loops")

console.log("Qlith Innovation")

let i;
for (let i = 1; i <= 5; i++) {
    console.log("Hello")

}

console.log(i)

let a = 1;
while (a <= 10) {
    console.log("Qlith")
    a++;
}


let arr = [1, 2, 3, 4, 5,6,7,8];

// while (arr.length >= 0) {
//     console.log("hello");
//     arr.pop()
// }

while(arr.length != 0){
    console.log("hello")
    arr.pop()
}


do {
    console.log("Bye")
} while (false);



let num=20;

if(num%2==0){
    console.log(num)
}


for(let i =1;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}
let game;
while (game!=30)
{
    game=prompt("enter your number")
    if(game==30)
    {
        console.log("you won thye game")
    }
    
}



let userNo=20;

while(true){
    let promptNo=prompt("Enter  a number");

    if(promptNo === userNo){
        console.log("match");
        break;
    }
}

