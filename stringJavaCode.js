// JavaScript source code

//I use this to see if the words put in match up after all the code runs
let pointsToPalindromes;
// This is use to display the Original word that was typed in
let ogWord = "";


// This is my first function that i use, I gets the word and if if cant find a word then it tells the person to write a word
function checkIfBlank() {
   
    useWord = document.getElementById("userWord").value;
    //Means if nothing is typed it doesnt run the real function
    if (useWord.length == 0) {
        //Debug stuff
        console.log("No word detected");
        document.getElementById("results").innerHTML = "Please type in a palindrome!"
    }
    //Found a word!
    else if (useWord.length > 0) {
        
        console.log("Word Found!  " + useWord);
        console.log(useWord.length);
        ogWord = document.getElementById("userWord").value;
        palidromeChecker();
    }
}


function palidromeChecker() {

    //\s Is Regex for white spaces. And g means global flag so together "All white spaces". asd well as turning all Upper cases to lower cases
    useWord = useWord.replace(/\s+/g, '').toLowerCase();
    //sets the points to be Palindrome to the lenght of the word without spaces
    pointsToPalindromes = useWord.length;

    //Debug stuff
    console.log(useWord);

    //Makes a forloop based on the word  lenghth
    for (let i = 0; i < useWord.length; i++) {
       
        //Create a string that holds the first letter in the wortd character of the word
             let charBeginning = useWord.charAt(i);
             // holds the last letter of the word, I used this method cause it made the most sense to me
            let charEnding = useWord.charAt(useWord.length - 1 - i);
            //Debugging stuff for me to make sure everything working
            console.log("Character beginning letter is: " + charBeginning);
             console.log("Character Ending letter is: " + charEnding);

             //This states if the  first and last characters match each other then Everything going fine!
             if (charBeginning == charEnding) {
                 console.log("This is true!");
                 console.log(charBeginning + charEnding);
             }
             //if they don't then minus one from the points to palidromes which means its no longer a palindrome
             else if (charBeginning != charEnding) {
                 console.log("This is false!");
                 console.log(useWord.length - i);
                 pointsToPalindromes--;
             }
    }
    //goes to my final function
    finalResults();


}

function finalResults() {
    //Basically checks if the pointsToPalindome is still the length. if not it is not as palindrome.
    if (pointsToPalindromes == useWord.length) {
       
        document.getElementById("results").innerHTML = "Congrats  " + ogWord + " Is a Palindrome!";
    }
    else {
       
        document.getElementById("results").innerHTML = "Sorry  " + ogWord + " Is Not Palindrome"
    }

}