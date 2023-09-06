/* Задача1 */

"use strict"
  function solveEquation(a, b, c) {
  	let arr = [];
  	let discriminant = Math.pow(b, 2) - 4 * a * c;

  	if (discriminant < 0) {
  		return arr;
  	} else if (discriminant === 0) {
  		let answer = -b / (2 * a);
  		arr.push(answer);
  	} else if {
  		let firstAnswer = (-b + Math.sqrt(disc)) / (2 * a);
  		let secondAnswer = (-b - Math.sqrt(disc)) / (2 * a);
  		arr.push(firstAnswer, secondAnswer);
  	}
  	return arr;
  }



/* Задача2 */

  function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}