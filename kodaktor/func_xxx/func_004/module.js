export default
function itworks(...funcs) {
    return funcs.reduce(function itworkstoo(par1, par2) {
        return function ihopeitworks(...args) {
            return par1(par2(...args), function isthisevenworks(x) {
                return x
            })
        }
    })
}