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

// var userInput = prompt("enter value")
// if (userInput % 3==0){
//     document.write(`<h1>Hi! This number can be counted as Odd number as it can not be divided by TWO!</h1>`)
// }
// else if (userInput % 2==0 ){
//     document.write(`<h1>HI! This is an EVEN number</h1>`)
// }

// else if(userInput % 3==1){
//     document.write(`<h1>happy coding reminder 1</h1>`)
    
// }
// else{
//     document.write(`<h1>HAPPY CODING, Dear FAIZ!</h1>`)
// }



//STRING METHODS PRACTICE IN JAVASCRIPT!
// var greetings = "helllo";
// var result= greetings.toUpperCase();
// console.log(result)

// var char = "faizMAHMOOD";
// var charRes = char.charAt(3);
// console.log(charRes)

// var nam ="faiz";
// console.log(nam[0])

// var firsrName = "faiz";
// var fullName = "mehmood"
// var con = firsrName.concat(" ",fullName).toUpperCase()
// console.log(con)


// var num = "                                        faiz   mahmood   ";
// var result= num.trimStart();
// console.log(result)

// var num = "      faiz  mahmood  ";
// var result= num.trim()
// console.log(result)

// var num = "hello world!";
// var num2 = num.repeat(2);
// console.log(num2)
// var userName = " mr faiz mahmood kurovi";
// var userRes = userName.replaceAll("FAIz","fEROZ")
// console.log(userRes)

// / var userInfo = prompt('Add something')

// var vowelCount = 0
// var nonVowelCount = 0
// for (var i = 0; i < userInfo.length; i++) {
//     console.log(userInfo.charAt(i))
//     var alphabet = userInfo.charAt(i).toLowerCase()
//     if (alphabet == 'a' || alphabet == 'i' || alphabet == 'e' || alphabet == 'o' || alphabet == 'u') {
//         vowelCount++
//     } else if (alphabet !== ' ') {
//         nonVowelCount++
//     }
// } console.log('Vowels are ', vowelCount, 'Non Vowels are', nonVowelCount)


// var userInput= prompt("Enter words or sentences to count vowel and non")
// var vowelCount = 0;
// var nonvowelCount = 0;
// for(var i =0;i<userInput.length; i++){
//     console.log(userInput.charAt(i))
//     var alphabet =userInput.charAt(i).toLowerCase()
//     if(alphabet=="a"|| alphabet=="e"|| alphabet=="i"|| alphabet=="o"|| alphabet=="u"){
//         vowelCount++
//     }
// else if (alphabet!==" "){
//     nonvowelCount++

// }

// }console.log("vowel",vowelCount,"nonvowel",nonvowelCount)

// var userInput= prompt("enter here");
// var vowelCount= 0;
// var nonVowelCount = 0;
// for(var i =0; i<userInput.length; i++){
//     console.log(userInput.charAt(i))
//     var alphabet=userInput.charAt(i).toLowerCase();
//     if(alphabet =="a"||alphabet=="e"||alphabet =="i"||alphabet=="o"||alphabet=="u"){
//         vowelCount++
//     }
//     else if (alphabet!==" "){
//         nonVowelCount++
//     }

// }
// console.log("vowels from usrinput are",vowelCount,"Non vowels found in userINPUT ARE",nonVowelCount )
// var userInput =prompt("enter number to check whether the is even or odd")
// var even = 0
// var odd = 0
// var num =parseInt( userInput)
// for (var i =0; i<=num.length;i++){
//     if (num % 2 ===0){
//         even++
//     }
//     else if(num % 2===1) {
//         odd++
//     }
    
// }
// console.log("even",even,"odd" ,odd) 


// var userInput= prompt("enter number")
// var evenNumber = 0;
// var oddNumber = 0 ;
// if(!isNaN(userInput)){
//     for (var i = 0; i <userInput.length;i++){
//         var digits = parseInt(userInput[i])
//             if(digits %2===0){
//              evenNumber++
//             }else{
//                 oddNumber++
//             }
//         }
//     }
// console.log("evenNUmber",evenNumber,"oddNumber",oddNumber)

// var userInput = prompt("ENTER WORDS OR ANY NAMES")

// var vowels = 0;
// var nonvowel = 0;
// for(var i =0; i < userInput.length; i++){
//     console.log(userInput.charAt(i))
//     var alphabet=userInput.charAt(i).toLowerCase()
//     if (alphabet=="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u"){
//      vowels++
//     }else if(alphabet!==" "){

//         nonvowel++
//     }
// }
// console.log("vowels",vowels,"nonVowels",nonvowel)
var userInfo= prompt('fill it out plz')
var vowel= 0
var nonvowel = 0
for(var i = 0; i<userInfo.length; i++){
var alphabet= userInfo.charAt(i).toLowerCase()
if(alphabet==="a"||alphabet==="e"||alphabet==="i"||alphabet==="o"||alphabet==="u"){
    vowel++

}else if(alphabet !==' '){
    nonvowel++
}
}
console.log("vowel",vowel,"nonvowel",nonvowel)