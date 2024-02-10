//Functions in javascript

function myFunc(){
    console.log("Normal Function");
}

const funky = function(){
    console.log("Anonymous Function");
} //in anonymous function eliminate the function name

const func = () => {
    console.log("Arrow Function");
} //in arrow function eliminate also the keyword function

myFunc();
funky();
func();

//Callback functions

//A function receiving another function as parameter

function func1(){
    console.log("Inside function 1");
}
function func2(receive){
    console.log("Inside function 2");
    receive();
}
func2(func1);

//op-> Inside function 2
// Inside function 1

//Function returning function

function parentfunc(){
    function childfunc(){
        console.log("Child function");
    }
    return childfunc;
}
const final = parentfunc();

console.log(final);
// op-> ƒ childfunc(){
//     console.log("Child function");
// }
console.log(typeof(final)); //op-> function

final(); //op-> Child function