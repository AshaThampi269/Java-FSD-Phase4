// ---------------------------- Example 1 ---------------------------- //
let numbers = [2, 3, 5, 7, 11, 13, 17];

// Create another array by slicing from index 3 to 5
let newArray = numbers.slice(3,6);
console.log(newArray);

// ---------------------------- Example 2 ---------------------------- //
let languages = ["Javascript", "Python", "C", "C++", "Java"];

// Slicing array from start to end
let new_arr = languages.slice();
console.log(new_arr);

// Slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1);

// Slicing from the second element to fourth element
let new_arr2 = languages.slice(1,4);
console.log(new_arr2);

// ---------------------------- Example 3 with negative index ---------------------------- //
const languages1 = ["Javascript", "Python", "C", "C++", "Java"];

// Slicing array from start to second-to-last
let new_arr3 = languages1.slice(0, -1);
console.log(new_arr3);

// Slicing from the third-to-last
let new_arr4 = languages1.slice(-3);
console.log(new_arr4);