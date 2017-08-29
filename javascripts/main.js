"use strict";
console.log("main.js active");

/***********  SCRIPT  ***************/
let testString = "";
let getLetters = document.getElementById("lettersButton");
let stringOutR = document.getElementById("domOut");
let stringOutA = document.getElementById("domAlphabetical");
let stringOutP = document.getElementById("domPalindrome");
let getEnter = document.getElementById("wordsIn");


getLetters.addEventListener("click", changeString);

// Input via Enter Key
getEnter.addEventListener("keypress", enterKey);

function enterKey(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    changeString();
  }
}


  // console.log("matches", matches);
  


function changeString() {
  event.preventDefault();

 testString = document.getElementById("wordsIn").value;
  
 var matches = testString.match(/\d+/g);
  console.log("matches", matches);
  if (matches !== null) {
      alert('Enter only letters; no numbers allowed');
      } else {

          let reverse = reversal(testString);
          let alphabetical = alphabits(testString);
          let palindrome = testPalindrome(testString);

          stringOutR.innerHTML = `Reversed String is:  ${reverse}`;
          stringOutA.innerHTML = `Alphabetical Order is:  ${alphabetical}`;
        } 
}
    
//Functions
function reversal(testString) {
  return testString.split('').reverse().join('');
}

function alphabits(letters) {
  return letters.split('').sort().join('');
}

function testPalindrome(letters) {
  let reverseString = letters.split("").reverse().join("");
  if (reverseString == letters){
    return stringOutP.innerHTML = `The string ${testString} is a palindrome.`;
  } else {
      return stringOutP.innerHTML = `The string ${testString} is not a palindrome`;
    }
} 








