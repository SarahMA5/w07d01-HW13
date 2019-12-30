// ------ FOR ALL THE EXCERCISES ONLY USE ARROW FUNCTIONS  

// PART 1:  USE MAP IN THE FOLLOWING EXCERCISES //

// A) write a function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hello stranger , what do we have today? ') // => " HELLO stranger , WHAT do WE have TODAY ?"

const swapCase=(string)=> {
  //first, take the input string and convert it into an array of words forming up that string.
  //Using a map function with an index representing the current index of the array we're currently generating.
    let swappedString=(string.split(' ')).map((word,index)=>{
      //Since we'd like to capitalize every other word, we need to check if the current position (index) is divisible by (2).
      //if that's the case, capitalize the word using '.toUpperCase()' method to add the capitalized word to that position.
      if(index%2==0){return word.toUpperCase();} 
        else{return word;} //else, just add the word as it is to the current position.      
      })   
  return swappedString.join(' '); //convert the array of words forming that sentence into a string using join function and return the string to the user.
  };

  console.log(swapCase("hello stranger, what do we have today?"));

// B) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"

const shiftLetters = string=> {
  //Convert the input word into an array of characters which build up that word. 
  let wordIntoAnArray = Array.from(string);
  //Using map function, generate an array of char codes 'codedString' respresenting each character of the previously created array of chars. 
  let codedString = wordIntoAnArray.map((letter) => (letter.charCodeAt(0)) + 1) //incrementing each code representing a character by 1.
  //Using another map function, map each character code provided in the 'codedString' array to its equivalent character using 'String.fromCharCode(code)' function.
  let newWord = codedString.map((codedLetter) => String.fromCharCode(codedLetter))
  newWord=newWord.join('') //convert the array of characters (representing the new word) into a string using '.join' function.
  return newWord //return the new word.
};

console.log(shiftLetters('hello'))
console.log(shiftLetters('abcxyz'))





// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES

// A) Build a Deck
// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
// The start of your output should look something like this:
// - ace of clubs
// - 2 of clubs 
// - 3 of clubs 
// - 4 of clubs 
// - 5 of clubs 
// - 6 of clubs 
// - 7 of clubs 
// - 8 of clubs 
// - 9 of clubs 
// - 10 of clubs 
// - jack of clubs 
// - queen of clubs 
// - king of clubs 
// - ace of diamonds
// - 2 of diamonds
// - 3 of diamonds 

const BuildADeck=()=>{
  //Initialize two arrays, one contains the set of suits: clubs, diamonds, spades, and hearts.
  //And the other has the 13 ranks of each one of the suits.
  const suits = ['clubs', 'diamonds', 'spades', 'hearts',];
  const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var deck = []; //Define an empty array for the deck of cards, where we will be pushing the generated cards.
  //Using two forEach loops, one loops through the array of suits, and the inner forEach loops through the 
  //array of ranks, together they would generate a string representing the card that gets pushed into the deck of cards array.
  suits.forEach((suit) => ranks.forEach((rank) => { deck.push(rank + " of " + suit); }))
  console.log("\nCards:")
  deck.forEach((card => console.log(card)))}; //Use forEach loop for the purpose of displaying the cards.

  BuildADeck();



// B) Word Play            
//Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

const wordPlay=()=>{
  //1.Get input sentence from the user.
  var input = prompt("Enter a Sentence: ");
  //2.Convert the sentence into an array using '.split' method.
  //3.Use 'filter' method on the generated array.
  //4.for evety word in that array, only add to 'preferredWords' array the words which length is equal to or greater than 3.
  preferredWords = (input.split(" ")).filter((word) => word.length >= 3) 
  //5.Reverse the generated array of 'preferredWords' and convert it to string using '.join' method.
  preferredWords = (preferredWords.reverse()).join(" ")
  console.log(preferredWords)}; //Display the result
  
  wordPlay();
