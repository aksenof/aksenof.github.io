// author: Aksenov Andrey
const mixin = function () {
    return this * this;
};
console.log(mixin.apply(5));