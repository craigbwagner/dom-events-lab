/*-------------------------------- Constants --------------------------------*/
const calculator = {
	displayValue: '_',
	operation: null,
	inputs: [],
	result: null,
	lastResult: null,
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
	if (event.target.className.includes('equals')) {
		compute();
	}
}

const setDisplay = (text) => {
	if (calculator.displayValue === '_') {
		calculator.displayValue = text;
	} else if (
		calculator.operation !== null &&
		calculator.displayValue.length === 0
	) {
		console.log('hello');
		calculator.displayValue = text;
	} else {
		calculator.displayValue += text;
	}
	displayElement.textContent = calculator.displayValue;
};

const setOperator = (event) => {
	if (calculator.displayValue === '_') {
		return;
	} else if (calculator.lastResult === null) {
		calculator.inputs.push(calculator.displayValue);
		calculator.displayValue = '';
		console.log(calculator);
	} else {
		//if performing a calculation based on the previous result
		calculator.inputs.push(calculator.lastResult);
		calculator.displayValue = '';
	}
	calculator.operation = event.target.id;
};

const clear = () => {
	calculator.displayValue = '_';
	displayElement.textContent = calculator.displayValue;
	calculator.inputs = [];
	calculator.result = null;
	calculator.operation = null;
	calculator.lastResult = null;
};

const compute = () => {
	if (calculator.inputs.length == 1) {
		calculator.inputs.push(calculator.displayValue);

		for (let i = 0; i < 2; i++) {
			calculator.inputs[i] = Number(calculator.inputs[i]);
		}
		console.log(calculator);

		switch (calculator.operation) {
			case 'add':
				calculator.result = calculator.inputs[0] + calculator.inputs[1];
				break;
			case 'subtract':
				calculator.result = calculator.inputs[0] - calculator.inputs[1];
				break;
			case 'multiply':
				calculator.result = calculator.inputs[0] * calculator.inputs[1];
				break;
			case 'divide':
				calculator.result = calculator.inputs[0] / calculator.inputs[1];
				break;
		}

		calculator.lastResult = calculator.result;
		displayElement.textContent = calculator.result;
		calculator.result = null;
		calculator.operation = null;
		calculator.inputs = [];
	}
};

displayElement.textContent = '_';
