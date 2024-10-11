console.log("Hello World");

let myName = document.getElementById('myName');

console.log(myName.innerHTML);
// myName.innerHTML = 'bublu';
console.log(myName);
console.log(myName.outerHTML);
// myName.outerHTML = 'Tuhin';

// Both Are Same;
console.log(myName.innerText);
console.log(myName.outerText);
// myName.outerText = 'antor';

console.log(myName.textContent);
// myName.textContent = 'faruk';