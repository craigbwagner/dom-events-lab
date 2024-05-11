/*-------------------------------- Constants --------------------------------*/
const calculator = {
	displayValue: '_',
	operation: null,
	inputs: [],
	result: null, //pressing an operator will push the first value into this array
};

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const calculatorElement = document.querySelector('.calculator');
const displayElement = document.querySelector('.display');
const buttonElements = document.querySelectorAll('.button');
const numberElement = document.querySelector('.number');
const addElement = document.querySelector('.add');
const subtractElement = document.querySelector('.subtract');
const multiplyElement = document.querySelector('.multiply');
const divideElement = document.querySelector('.divide');
const clearElement = document.querySelector('.clear');

/*----------------------------- Event Listeners -----------------------------*/
buttonElements.forEach((button) => {
	button.addEventListener('click', buttonResponse);
});

/*-------------------------------- Functions --------------------------------*/
function buttonResponse(event) {
	if (event.target.className.includes('number')) {
		setDisplay(event.target.textContent);
	}
	if (event.target.className.includes('operator')) {
		setOperator(event);
	}
	if (event.target.className.includes('clear')) {
		clear();
	}
	// if (event.target.class === 'equals') {
	// }
}

const setDisplay = (text) => {
	console.log('click');
	if (calculator.displayValue === '_') {
		calculator.displayValue = text;
	} else {
		calculator.displayValue += text;
	}
	displayElement.textContent = calculator.displayValue;
};

const setOperator = (event) => {
	if (calculator.displayValue === '_') {
		return;
	} else if (result !== null) {
		calculator.inputs = [];
		calculator.inputs.push(calculator.inputs.result);
	}
	calculator.operator = event.target.id;

	//console.log(calculator.operator);
};

const clear = () => {
	calculator.displayValue = '_';
	displayElement.textContent = calculator.displayValue;
	calculator.inputs = [];
	calculator.result = null;
	calculator.operator = null;
};

const compute = () => {
	switch (calculator.operator) {
		case 'add':
			calculator.result = calculator.inputs[0] + calculator.inputs[1];
		case 'subtract':
			calculator.result = calculator.inputs[0] - calculator.inputs[1];
		case 'multiply':
			calculator.result = calculator.inputs[0] * calculator.inputs[1];
		case 'divide':
			calculator.result = calculator.inputs[0] / calculator.inputs[1];
	}
};

displayElement.textContent = '_';
