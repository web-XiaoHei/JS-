function hyComponse(...fns) {
    var length = fns.length
    for (var i = 0; i < length; i++) {
        if (typeof fns[i] !== "function") {
            throw new TypeError("Expected arguments are functions")
        }
    }

    function compose(...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result

    }
    return compose
}

function double(num) {
    return num * 2
}

function square(num) {
    return num ** 2
}
var newFn = hyComponse(double, square)
console.log(newFn(10));