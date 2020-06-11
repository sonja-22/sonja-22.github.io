/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


const sHeading = document.querySelector('h2');
sHeading.textContent = 'Changed By JavaScript.';

let vari1 = 'Sandwich';

/*
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
*/

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

/*document.querySelector('html').onclick = function() {
    alert('If this was another webpage you would I would have opened an ad on another tab, or if I was extra villainous, on the same one as this.');
}*/
