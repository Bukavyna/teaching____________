"use strict";

//  n = n + 5 => n+=5, n-=5, n/=5, n*=5, n%=5
//  n = "10"
//  n = +n
// Оператор if
//if(умова) {
//	тіло умови
//}

/*
let  q = 10;
 if (q<= 5) {
	 console.log("yes");
 }
	*/


/*
	let age = prompt("write your age");
	if (age >=18) {
		console.log("Ласкаво просимо до клуву");
	}
else {
	console.log("Ще замалий");
} */


/*
let age = prompt("write your age");
if (age >= 18) {
	console.log("Ласкаво просимо до клуву");
}
else if(age == null) {
	console.log("Вхід скасовано")
}
else if (age =="") {
	console.log("Ви нічого не ввели");
}
else if(age < 18) {
	console.log("Ще замалий");
}
else {
	console.log("Ти ввів не число");
}
*/


/*
let club = prompt("write the best football club");
if(club == 'Arsenal') {
	let ask = prompt('do you love Arsenal? write yes or no')
	if (ask == 'yes') {
		console.log('my too');
	}
	else if (ask == 'no') {
		console.log('Ajajaj!');
	}
}
else {
	console.log('Bad choose');
}
*/




/* if (ask === 'yes') {
  console.log('my too');
 }
 else if (ask === 'no') {
  console.log('Ajajaj!');
 }
 else {
  console.log('Bad choose');
 }
*/

/*
let n1 = +prompt('write first number');
let n2 = +prompt('write second number');
if (n1>n2) {
	console.log('Значення в змінній n1=$(n1) більше за n2=$(n2)');
}
else if (n1<n2) {
	console.log('Значення в змінній n1=$(n1) менше за n2=$(n2)');
}
else if (n1===n2) {
	console.log('Змінні n1=$(n1) та n2=$(n2) мають рівні значення');
}
*/


/*
let ask = prompt('Хто є путін?');
if (ask === 'хуйло' || ask ==='ХУЙЛО') {
	console.log('Бінго!');
}
*/


/*
let life = prompt('write your age');
if (life>=0 && life<=1) {
	console.log('Немовля');
}
else if (life>1 && life<6) {
	console.log('Дитина');
}
else if (life>=6 && life<17) {
	console.log('Юнак');
}
*/


/*
let count = 0;
console.log("Count =", count);
let testColorSun = prompt("Якого кольору сонце?");
if(testColorSun == "Жовтого") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testColorGrass = prompt("Якого кольору трава?");
if(testColorGrass == "Зеленого") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testCountries = prompt("Яка країна найкраща?");
if(testCountries == "Україна") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testAddition = prompt("Скільки буде 2+2?");
if(testAddition == "4") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testPresident = prompt("Як звуть пркзидента московії?");
if(testPresident == "хуйло") {
	console.log("БІНГОООО!!!! Ви молодець!!!!!!!");
	count++;
}

console.log("Count =", count);
let testAnimals = prompt("Яка тварина найшвидша?");
if(testAnimals == "Гепард") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testlanguare = prompt("Яку мову звуть соловї`ною?");
if(testlanguare == "Українську") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testColorSky = prompt("Яого кольору небо?");
if(testColorSky == "Блакитного") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testNamesInsects = prompt("Як українською буде стрекоза?");
if(testNamesInsects == "Бабка") {
	console.log("Відповідь вірна");
	count++;
}

console.log("Count =", count);
let testcreative = prompt("Як українською буде креативний?");
if(testcreative == "Творчий") {
	console.log("Відповідь вірна");
	count++;
}
document.write(count);
*/


/*
const hamburger = 3;
const fries = 1;
const cola = 0;
console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'dbfvbvvibviab');
if (hamburger === 3 && cola === 1 && fries) {
	console.log('Всі ситі');
}
else {
	console.log('Ми ідемо в другий заклад');
}
*/


/*
console.log(1 && 0);
//console.log(1 && 5);
//console.log(null && 5);
//console.log(0 && 'dbfvbvvibviab');
*/


/*
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('Всі задоволені');
}
else {
	console.log('Ми ідемо в другий заклад');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);
*/

/*

//for (let i=1; i<=8; i++) {
	//document.write('<h2>Loop $(i)</h2>');
//}

 */



//Завдання 3/1
/*
let n = +prompt(`write count loop`);
for (let i=1; 1<n; n--) {
	i = i * n;
	document.write(`<h2>Loop ${i}</h2>`);
}
*/

///////Завдання 4/1  while  !!!!
/*
let n = +prompt(`Введіть число`);
let i = 1;
while (1 < n) {
	i = i * n;
	n--;
	document.write(`<h1>${i}</h1>`);
}
*/


/*
//Завдання 3/2
for(let count=-100; count<=100; count+=10){
	document.write(`<h2>Loop ${count}</h2>`);
}
*/

///////Завдання 4/2  while  !!!!
/*
let count =-100;
while (count<=100) {
	document.write(`<h2>Loop ${count}</h2>`);
	count+=10;
}
*/


/*
//Завдання 3/3
for (let count=1; count<=2*55; count+=2) {
	document.write(`<h2>Loup ${count}</h2>`);
}
*/

///////Завдання 4/3  while  !!!!
/*
let count=1;
while (count<=2*55) {
document.write(`<h2>Loup ${count}</h2>`);
count+=2;
}
 */


/*
//Завдання 3/4
for (let count=90; count>=0; count-=5) {
	document.write(`<h3>Loop ${count}<h3>`);
}
*/

///////Завдання 4/4  while  !!!!
/*
let count = 90;
while (count>=0) {
	document.write(`<h2>Loop ${count}</h2>`);
	count-=5;
}
*/


/*
//Завдання 3/5
for (let count=2; count<=2**20; count=count*2) {
	document.write(`<h3>Loop ${count}<h3>`);
}
*/

///////Завдання 4/5  while  !!!!
/*
let count=2;
while (count<=2**20) {
	document.write(`<h3>Loop ${count}<h3>`);
	count=count*2
}
 */


/*
//Завдання 3/6
for (let a=2; a<=10000; a=2*a-1) {
	document.write(`<h3>Loop ${a}<h3>`);
}
*/

///////Завдання 4/6  while  !!!!
/*
let a=2;
while (a<=10000) {
	document.write(`<h3>Loop ${a}<h3>`);
	a=2*a-1;
}
 */


/*
//Завдання 3/7
	for (let a=-166; a<=99; a=2*a+200) {
		if (a>=-99) {
			document.write(`<h1>${a}</h1>`);
		}
}
*/

///////Завдання 4/7  while  !!!!
/*
let a=-166;
	while (a<=99) {
	 if (a >= -99) {
			document.write(`<h1>${a}</h1>`);
		}
		a = 2 * a + 200;
	}
*/


/*
//Завдання 3/8
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
let result = 1;
for (let i=0; i<b; i++) {
	result = result * a;
}
document.write(`<h1>${result}</h1>`);
 */

///////Завдання 4/8  while  ( + ** ) !!!!
/*
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть степінь`);
let result = 1;
let i=0;
while (i<b) {
	result = result * a;
	i++;
}
document.write(`<h1>${result}</h1>`);
*/


/*
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть від'ємний степінь`);
function power(a, b) {
	let result = 1;
	for(let i = 0; i > b; i--) {
		result *= a;
	}
	return 1 / result;
}
let result = power(a, b);
document.write(`<h1>${result}</h1>`);
*/

///////Завдання 4/8  while  ( - ** ) !!!!
/*
let a = +prompt(`Введіть число`);
let b = +prompt(`Введіть від'ємний степінь`);
function power(a, b) {
	let result = 1;
	let i = 0;
	while (i > b) {
		result *= a;
		i--;
	}
	return 1 / result;
}
let result = power(a, b);
document.write(`<h1>${result}</h1>`);
*/



//////Завдання 4 !!!!!!!
/*
let count = 4;
let a = false;

while (count > 0 && !a) {
  let password = prompt("Введіть пароль:");

  if (password == 4) {
    a = 4;
    document.write(`<h1>Ласкаво просимо на сайт</h1>`);
  } else {
    count--;
    if (count > 0) {
      prompt(`Невірний пароль. Залишилось ${count} спроби.`);
    } else {
      prompt("Будь ласка, спробуйте пізніше!");
    }
  }
}
 */
/*
let password = prompt("write your age");
if (password === 4) {
 console.log("Ласкаво просимо до клуву");
}
else if (password == null) {
 console.log("Вхід скасовано");
}
else if (password === "") {
 console.log("Ви нічого не ввели");
}
else if (password !== 4) {
 console.log("Ще замалий");
}
else {
 console.log("Ти ввів не число");
}


/*
let num = 5;
while (num <= 10) {
	console.log(num);
	num++;
}
*/
/*
for (let a=20; a>=10; a-=1) {
	if (a === 13) {
		break;
	}
	console.log(a);
}
*/

/*
for (let a=2; a<=10; a+=2) {
	console.log(a);
}
 */
/*
for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}
*/

/*
let i = 2;
while (i <= 16) {
	i++;
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
 i++;
}
*/

/*
//function fifthTask() {
 const arrayOfNumbers = [];
 for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
 }
 console.log(arrayOfNumbers);
// return arrayOfNumbers;
//}
 */

/*
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
 result[i] = arr[i];
}
console.log(result);
 */

/*
const data = [5, 10, `Shopping`, 20, 'Homework'];

	for (let i = 0; i <= data.length; i++) {
		if (typeof (data[i]) === `number`) {
			data[i] = data[i] * 2;
		} else if (typeof (data[i]) === `string`) {
			data[i] = `${data[i]} - done`;
		}
	}
	console.log(data);
*/

/*
const data = [5, 10, `Shopping`, 20, `Homework`];
const result = [];
	for (let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.length - i]
	}
	console.log(result);
 */


/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i=0; i<data.length; i++) {
	if (typeof(data[i]) === `number`) {
		data[i] = data[i] * 2;
	}
	else if (typeof(data[i]) === `string`) {
		`data[i] = ${data[i]} - done`;
	}
}
console.log(data);
*/

/*
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
	if (typeof(data[i]) === `number`) {
		data[i] = data[i] * 2;
	}
		else if (typeof(data[i]) === `string`) {
		data[i] = `${data[i]} - done`;
	}
}
console.log(data);
*/


/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
	if (typeof(data[i]) === 'number') {
		data[i] = data[i] * 2;
	} else if (typeof(data[i]) === 'string') {
		data[i] = `${data[i]} - done`;
	}
}
console.log(data);
*/


/*
const lines = 5;
let result = '';

for (let i=0; i<=lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let j = 0; j <2* i+1; j++) {
		result = result + "*";
	}
	result = result + (`\n`);
}
console.log(result);
 */

/*
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result)
 */

/*
function* generateFirTree(height) {
	let blanks = ' '.repeat(height - 1), // (1)
		asterisks = "*"                      // (2)

	for (let i = 0; i < height; i++) {
		yield blanks + asterisks + blanks  // (3)
		blanks = blanks.slice(0, -1)       // (4)
		asterisks += "**"                  // (5)
	}                                    // (6)
}

for (let line of generateFirTree(6)) {
	console.log(line)
}
 */


/*
let count=2;
while (count<=2**20) {
	document.write(`<h3>Loop ${count}<h3>`);
	count=count*2
}
 */




//function sayHello(name) {
//	return `Hello ${name}`;
//}

/*
function sayHello (name){
	if (!name) {
		return `Hello friend`;
	}
	else {
		return `hello ${name}`;
	}
}
*/

/*
function sayHello (name){
		return !name ? `Hello friend` : `hello ${name}`;
}

let message = sayHello (``);
console.log(`Message`, message);
 */

/*
function pow(num, degree){
	let result = 1;
	for (let i=1; i<=degree; i++) {
		result *= num;
	}
	return  result;
}
 */

/*
function pow(num, degree) {
	let result = 1;
	if (degree != 0) {
		for (let i = 1; i <= degree; i++) {
			result *= num;
		}
	}
	return result;
}
let res = pow(2,3)
console.log(`2^3`, res);
*/



///// task_5_1  !

 let season = prompt('Введіть число');

 switch (season) {
     case '12':
     case '1':
     case '2':
        alert ('Зима');
         break;
   case '3':
   case '4':
   case '5':
         alert('Весна');
         break;
   case '6':
   case '7':
   case '8':
         alert('Літо');
         break;
   case '9':
   case '10':
   case '11':
     alert('Осінь');
     break;
         default:
         alert('Неможливо');
         break;
 }



///// task_5_2  !!


function checkNumber (n) {
	let number = true;

	if (n < 2) {
		number = false;
	}
	else {
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				number = false;
			}
		}
	}
	if (number) {
		console.log(`${n} просте число`);
	}
	else {
		console.log(`${n} не просте число`);
	}
}
checkNumber(2);
checkNumber(3);
checkNumber(4);
checkNumber(5);
checkNumber(6);
checkNumber(7);
console.log(``);
console.log(``);


///// task_5_3  !!!

//Максимальне число !!

function maxNumber() {
  let number = arguments[0];

  for (let a = 1; a < arguments.length; a++) {
    number = number > arguments[a] ? number : arguments[a];
  }
  console.log(`${number} максимальне число`);
  return number;
}
maxNumber(-2, 0, -13, -1, 55, -67893);
maxNumber(2, 0, 13, 1, 55, 67893);
console.log(``);

//Мінімальне число !!

function minNumber() {
  let number = arguments[0];

  for (let a = 1; a < arguments.length; a++) {
    number = number < arguments[a] ? number : arguments[a];
  }
  console.log(`${number} мінімальне число`);
  return number;
}
minNumber(-2, 0, -13, -1, 55, -67893);
minNumber(2, 0, 13, 1, -55, 67893);
