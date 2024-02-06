const arr=[1,2,3,4,5];

//while-loop

let i=0;
let len=arr.length;
while(i<len){
    console.log(arr[i]);
    i++;
}

//do-while loop

do{
    i--;
    console.log(arr[i]);
}while(i>0);

//for-loop (square of each element)

for(i=0;i<len;i++){
    console.log(arr[i]*arr[i]);
}

const num=[2,4,6,8];

//for-of loop (here element stores the elemnt of array)

for(let element of num){
    console.log(element);
}

//for-in loop (here index stores index of arrays, index can be any variable)

for(let index in num){
    console.log(index);
}

//print element using for-in loop

for(let c in num){
    console.log(num[c]);
}

//for-each loop (it passes an function,i.e callback function),it passes element and index

const details=["Sunit","Ankit","Sohom","Bonoshree","Soumo"];

details.forEach(function(name,index){
    console.log(`Roll of ${name} is ${index}`);
})



