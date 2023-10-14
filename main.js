import Calculator from './calculator.js';

const displayPrimary = document.querySelector('[data-primary-operand]');
const displaySecondary = document.querySelector('[data-secondary-operand]');
const displayOperation = document.querySelector('[data-operation]');

const calculator = new Calculator(
	displayPrimary,
	displaySecondary,
	displayOperation
);

document.addEventListener('click', e => {
	// todo: click clear button
	if (e.target.matches('[data-all-clear]')) {
		calculator.clear();
	}
	// todo: click a number
	if (e.target.matches('[data-number]')) {
		calculator.addDigit(e.target.textContent);
	}
	// todo: delete button
	if (e.target.matches('[data-delete]')) {
		calculator.removeDigit();
	}
	// todo: click operation
	if (e.target.matches('[data-operation]')) {
		calculator.chooseOperation(e.target.textContent);
	}
	// todo: click equals
	if (e.target.matches('[data-equals]')) {
		calculator.evaluate();
	}
});
