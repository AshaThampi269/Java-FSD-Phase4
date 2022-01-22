// ---------------------------- Example 1 ---------------------------- //
//function
function greet(name, callback)
{
    console.log('Hi' + ' ' + name);
    callback();
}

//callback function
function callMe()
{
    console.log('I am a callback function');
}

//passing function as an argument
greet('Peter', callMe);

// ---------------------------- Example 2: Program with setTimeout() ---------------------------- //

function greet1()
{
    console.log('Hello World');
}

function sayName(name)
{
    console.log('Hello' + ' ' + name);
}

setTimeout(greet1, 2000);
sayName('John');