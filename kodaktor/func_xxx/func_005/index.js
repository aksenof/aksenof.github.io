// author: Aksenov Andrey
const curryPow = x => y => x ** y;
const partiPow = x => y => y ** x;
console.log(curryPow(2)(10)); // 1024
const qv = partiPow(2);
const cb = partiPow(3);
console.log(qv(3)); // 9
console.log(cb(3)); // 27
