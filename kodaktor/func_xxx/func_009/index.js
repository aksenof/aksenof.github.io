// author: Aksenov Andrey
const cc = function (x = 0) {
    return function () {
        return ++x;
    };
}
const c = cc()
console.log(c())
console.log(c())
console.log(c())