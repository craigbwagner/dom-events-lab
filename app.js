/*-------------------------------- Constants --------------------------------*/
const calculator = {
	displayValue: '_',
	operation: null,
	inputs: [],
	result: null, //pressing an operator will push the first value into this array
};

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display');

// const inputEl = document.querySelector('.input');
// const buttonElements = inputEl.children;

const numberElement = document.querySelector('.number');
const addElement = document.querySelector('.add');
const subtractElement = document.querySelector('.subtract');
const multiplyElement = document.querySelector('.multiply');
const divideElement = document.querySelector('.divide');
const clearElement = document.querySelector('.clear');

/*----------------------------- Event Listeners -----------------------------*/
'click',
	() => {
		console.log('click');
	};

/*-------------------------------- Functions --------------------------------*/
const buttonResponse = (event) => {
	// if (event.target.class === 'number') {
	//    switch (event.target.textContent) {
	//    }
	// }
	if (event.target.class === 'operator') {
		setOperator(event);
	}
	// if (event.target.class === 'clear') {
	// }
	// if (event.target.class === 'equals') {
	// }
};

const setDisplay = () => {
	displayElement.textContent = calculator.displayValue;
};

const setOperator = (event) => {
	if (calculator.displayValue !== '_') {
		calculator.operator = event.target.id;
	}
	console.log(calculator.operator);
};

const clear = () => {
	calculator.displayValue = '_';
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

setDisplay();
