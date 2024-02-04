//Primitive data types in javascript

let a=4; //Number
let b=4.6; //Number
let c="Sunit"; //String
let d=true; //Boolean
let e=null; //Null
let f=undefined; //Undefined
let g=BigInt(2323682782);
// let g=35355366n; //BigInt(same as above)
let h=Symbol("hii"); //Symbol

console.log(a,b,c,d,e,f,g,h);

console.log(typeof(e)); //op-> object

let age=19;
age=age+""; //convert number to string
console.log(typeof(age)); //op->String

let mystr="334";
mystr=+mystr; //convert string to number
console.log(typeof(mystr)); //op->Number

//Non primitive data types in javascript

const arr=[2,"Ankit",undefined,5.6]; //Array
console.log(typeof(arr)); //op-> object

const obj = {  
    "Name" : "Sunit",
    "Age" : 19,
} //Object

//If-else

let gender="M";

if(gender=="M"){
    console.log("male");
}
else if(gender=="F"){
    console.log("female");
}
else{
    console.log("Mental issues");
}

//Switch-case

let day=6;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
    break;
    case 3:
        console.log("WEDNESDAY");
    break;
    case 4:
        console.log("THURSDAY");
    break;
    case 5:
        console.log("FRIDAY");
    break;
    case 6:
        console.log("SATURDAY");
    break;
    case 7:
        console.log("SUNDAY");
    break;
    default:
        console.log("WRONG INPUT");
}

//Ternary operator

let max;
max=(6>2)?true:false;
console.log(max);


