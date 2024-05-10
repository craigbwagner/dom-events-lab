/*-------------------------------- Constants --------------------------------*/
const display = {
	value: 0,
};

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display');
const buttonElement = document.querySelector('button');
const numberElement = document.querySelector('number');
const addElement = document.querySelector('add');
const subtractElement = document.querySelector('subtract');
const multiplyElement = document.querySelector('multiply');
const divideElement = document.querySelector('divide');
const clearElement = document.querySelector('clear');

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const setDisplay = () => {
	displayElement.textContent = display.value;
};

setDisplay();
