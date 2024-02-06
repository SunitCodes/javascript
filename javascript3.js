//Array functionssss (pop,push,shift,unshift)

const word=["react","nodejs","java","c","mongodb"];

word.push("javascript","nextjs"); //.push adds element at the end
console.log(word); //op-> ['react', 'nodejs', 'java', 'c', 'mongodb', 'javascript', 'nextjs']

word.pop();
word.pop(); //.pop removes element from end
console.log(word); //op-> ['react', 'nodejs', 'java', 'c', 'mongodb']

word.unshift("css","typescript","html","python"); //add elements from beginning
console.log(word); //op-> ['css', 'typescript', 'html', 'python', 'react', 'nodejs', 'java', 'c', 'mongodb']

word.shift(); //removes element from front
console.log(word); //op-> ['typescript', 'html', 'python', 'react', 'nodejs', 'java', 'c', 'mongodb']

//Array copy methods

// 1) .slice

const cpyarr=word.slice();
console.log(cpyarr);
cpyarr.pop(); 
console.log(cpyarr); //op-> ['typescript', 'html', 'python', 'react', 'nodejs', 'java', 'c']

// 2) .spread

const cpy=[...word];
console.log(cpy); //op-> //op-> ['typescript', 'html', 'python', 'react', 'nodejs', 'java', 'c', 'mongodb']
