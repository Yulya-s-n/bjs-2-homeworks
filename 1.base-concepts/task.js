// Задача1

"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);

	if (d < 0) {
	return arr;
	}

	if (d > 0) {
	   let firstAnswer = (-b + Math.sqrt(d)) / (2 * a);
    	let secondAnswer = (-b - Math.sqrt(d)) / (2 * a);
    	arr.push(firstAnswer, secondAnswer);
    	console.log(arr);
		return arr;
		}

    if (d === 0) {
		let answer = -b / (2 * a);
		arr.push(answer);
		console.log(arr);
		return arr;
		}
		return arr;
	}




// Задача2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
// Проверяем аргументы на корректность и преобразуем их в числа
percent = parseFloat(percent);
contribution = parseFloat(contribution);
amount = parseFloat(amount);
countMonths = parseInt(countMonths);

// Проверяем, являются ли аргументы числами после преобразования
if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
	return false;
}

// Преобразуем процентную ставку из годовой в месячную и долю первоначального взноса
var monthlyInterestRate = percent / 100 / 12;
var loanBody = amount - contribution;

// Рассчитываем ежемесячный платеж
var monthlyPayment = loanBody * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

// Рассчитываем общую сумму, которую клиент должен вернуть банку
var totalAmount = monthlyPayment * countMonths;

// Округляем результат до двух знаков после запятой
totalAmount = parseFloat(totalAmount.toFixed(2));

return totalAmount;
}