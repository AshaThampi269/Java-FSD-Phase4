// ---------------------------- Example 1 ---------------------------- //
const message = "Javascript is fun and interesting language"

//divides the message string from space
console.log("\n Sentence Split \n");
let result = message.split(" "); //sentence split so delimeter is space
console.log(result);

// ---------------------------- Example 2 ---------------------------- //
console.log("\n Single word split \n");
console.log("ABCDEF".split("")); //single word split so no space between quotes

console.log("\n Sentence Split \n");
const text = "Java is awesome. Java is fun. We are still learning it. We are into phase-4.";
let pattern = ".";
let newText = text.split(pattern);
console.log(newText);

// Split string to max. 2 parts
console.log("\n Split to 2 parts \n");
let pattern1 = ".";
let newText1 = text.split(pattern1, 2);
console.log(newText1);

const text2 = "Javascript; Python; C; C++;"
let pattern2 = ".";
let newText2 = text.split(pattern2);
console.log(newText2);

// Using regex
console.log("\n Using regex \n");
let pattern3 = /\s*(?:;|$)\s*/; //white space
let newText3 = text.split(pattern3);
console.log(newText3);