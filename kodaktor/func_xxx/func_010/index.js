// author: Aksenov Andrey

//  было:  const f = x => x <= 1 ? 1 : x * f(x - 1);
//  стало: x => x <= 1 ? 1 : x * f(x - 1)
//  как такая функция может вызвать сама себя? у неё нет имени...

// 1. Простая рекурсия при помощи IIFE

// arrow functions
(f => n => n < 2 ? 1 : n * f(f)(n - 1))(f => n => n < 2 ? 1 : n * f(f)(n - 1))(5);

// anonymous functions
console.log(
	(function (f) {
		return function (n) {
			return n < 2 ? 1 : n * f(f)(n - 1);
		};
	})(function (f) {
		return function (n) {
			return n < 2 ? 1 : n * f(f)(n - 1);
		};
	})(5));

// 2. Y комбинатор с фиксированной точкой (Y Combinator) и IIFE
console.log(
	// Это Y комбинатор
	(realWork => (f => f(f))(f => realWork(n => f(f)(n))))
		// Это бизнес логика - realWork (тут может быть любой рекурсивный алгоритм)
		(f => n => n <= 1 ? 1 : n * f(n - 1))(5));

// 3. Еще оин пример Y комбинатора без IIFE
const Y = (f) => f((x) => Y(f)(x));
const factorialWithY = Y(f => (n) => n <= 1 ? 1 : n * f(n - 1));

console.log(factorialWithY(5));

// U комбинатор (это функция, которая применяет свой аргумент к самой себе:
// U = lambda f: f(f))
const U = (func) => func(func);
const factorialWithU = U(func => x => x <= 1 ? 1 : x * func(func)(x - 1));

console.log(factorialWithU(5));

// С помощью arguments.callee (устаревшее свойство)
const recursionCallee = function(n) {
	let g = arguments.callee;
	return n <= 1 ? 1 : n * g(n - 1);
};

console.log(recursionCallee(5));