//API

// The fetch api provides an interface for fetching resources 
// it uses response and request objects
// let promise = fetch(url,options);
// fetch always returns a promise 
// one way to use is chaining i.e, .then{}.then{}
// another is async await to make the function asynchronous 

const url = 'https://official-joke-api.appspot.com/jokes/random';


const getData = async() => {
    let response = await fetch(url);

    let fact = await response.json();
    console.log(fact);
    console.log(fact.setup);
    console.log(fact.punchline);
}
getData();

//function chaining

// function getFacts(){
// 
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data.text);
//     });
// }
