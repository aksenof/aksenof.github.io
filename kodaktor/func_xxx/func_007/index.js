// author: Aksenov Andrey
const sec = a => 1 + a;
const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));
const pwr = (x, n) => (n === 0) ? 1 : mpy(x, pwr(x, n - 1));
console.log(sec(11, 3));
console.log(add(11, 3));
console.log(mpy(11, 3));
console.log(pwr(11, 3));
for (let m = 1; m < 20; m++) {
    for (let i = 1; i > 0; i++) try {
        pwr(m, i);
    } catch (ex) {
        console.log("Пойман: " + ex + " на " + m + "^" + i);
        break;
    }
}