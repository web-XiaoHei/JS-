Function.prototype.zkapply = function (thisArg, argArray) {
    // 1.获取到要执行的函数
    var fn = this
    // 2.处理绑定的thisArg
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    // 3.执行函数
    thisArg.fn = fn
    // argArray = argArray ? argArray : []
    argArray = argArray || []
    var result = thisArg.fn(...argArray)
    delete thisArg.fn

    return result
}
function sum(num1, num2) {
    console.log(num1, num2);
    return num1 + num2
}

// var result = sum.apply("abc", [20, 30])
var result = sum.zkapply("abc", [20, 30])

console.log(result);