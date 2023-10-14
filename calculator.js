class Calculator {
	constructor(displayPrimary, displaySecondary, displayOperation) {
		this.#displayPrimary = displayPrimary;
		this.#displaySecondary = displaySecondary;
		this.#displayOperation = displayOperation;
		this.clear();
	}
	#displayPrimary;
	#displaySecondary;
	#displayOperation;

	get primaryOperand() {
		return parseFloat(this.#displayPrimary.dataset.value);
	}

	get SecondaryOPerand() {
		return parseFloat(this.#displaySecondary.dataset.value);
	}

	get operation() {
		return this.#displayOperation.textContent;
	}

	set primaryOperand(val) {
		this.#displayPrimary.dataset.value = val ?? '';
		this.#displayPrimary.textContent = displayNumber(val);
	}

	set secondaryOperand(val) {
		this.#displaySecondary.dataset.value = val ?? '';
		this.#displaySecondary.textContent = displayNumber(val);
	}

	set operation(val) {
		this.#displayOperation.textContent = val ?? '';
	}

	addDigit(digit) {
		if (digit === '.' && this.#displayPrimary.dataset.value.includes('.')) {
			return;
		}
		if (this.primaryOperand === 0) {
			this.primaryOperand = digit;
		} else {
			this.primaryOperand = this.#displayPrimary.dataset.value + digit;
		}
	}

	removeDigit() {
		const numberString = this.#displayPrimary.dataset.value;
		if (numberString.length <= 1) {
			this.primaryOperand = 0;
			return;
		}
		this.primaryOperand = numberString.substring(0, numberString.length - 1);
	}

	chooseOperation(operation) {
		if (this.operation !== '') return;
		this.operation = operation;
		this.secondaryOperand = this.primaryOperand;
		this.primaryOperand = 0;
	}

	evaluate() {
		let result = '';
		switch (this.operation) {
			case '*':
				result = this.SecondaryOPerand * this.primaryOperand;
				break;
			case '÷':
				result = this.SecondaryOPerand / this.primaryOperand;
				break;
			case '+':
				result = this.SecondaryOPerand + this.primaryOperand;
				break;
			case '-':
				result = this.SecondaryOPerand - this.primaryOperand;
				break;
			default:
				return;
		}
		this.clear();
		this.primaryOperand = result;
		return result;
	}

	clear() {
		this.primaryOperand = 0;
		this.secondaryOperand = null;
		this.operation = null;
	}
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en');
function displayNumber(number) {
	const stringNumber = number?.toString() || '';
	if (stringNumber === '') return '';
	const [integer, decimal] = stringNumber.split('.');
	const formattedInteger = NUMBER_FORMATTER.format(integer);
	if (decimal == null) return formattedInteger;
	return formattedInteger + '.' + decimal;
}

export default Calculator;
