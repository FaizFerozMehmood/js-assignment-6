// var x = 12;
// var y =x--;
// console.log(x);
// console.log(y)

// var x = 10;
// var y =--x;
// console.log(y);
// console.log(x);

// var a = 2;
// var b =  a++;
// console.log(a);
// console.log(b);

// var a = 2;
// var b = a--;
// console.log(a);
// console.log(b)

// var a = 10 ;
// var b = --a;
// console.log(a);
// console.log(b);

// var a = 2;
// var b = a;
// console.log(a);
// console.log(b);
// for (var i = 1; i <=19 ; i+=2){
    // console.log("result"+" " +i);
    // console.log(i*i);
// console.log(i);

// var num = 7;
// for (var i = 0; i <10 ; i ++){
//     // console.log(num * i)
//     var result =num * i;
//     // console.log('${num} * ${i} =${result}');
//     console.log(`${num} * ${i} = ${result}`);
// }
// var userInput = Number(prompt("enter value "));
// if(userInput % 3 ===0){
//     console.log("3ka")
// }
// if (userInput % 2===0){
//     console.log("even")
// }
// else{
//     console.log ("other Number")
// }

var userInput = prompt("enter value")
if (userInput % 3==0){
    document.write(`<h1>Hi! This number can be counted as Odd number as it can not be divided by TWO!</h1>`)
}
else if (userInput % 2==0 ){
    document.write(`<h1>HI! This is an EVEN number</h1>`)
}

else if(userInput % 3==1){
    document.write(`<h1>happy coding reminder 1</h1>`)
    
}
else{
    document.write(`<h1>HAPPY CODING, Dear FAIZ!</h1>`)
}