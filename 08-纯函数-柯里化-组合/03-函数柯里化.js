// 柯里化概念
// 把接受多个参数的函数，变成一个接受单一参数(最初函数的第一个参数)的函数，并且返回接受剩余参数，而且返回结果的新函数的技术
function add(x, y, z) {
    return x + y + z
}

var result = add(10, 20, 30)

console.log(result);

function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

var result1 = sum(10)(20)(30)

console.log(result1);

//简化柯里化的代码
var sum2 = x => y => z => {
    return x + y + z
}

console.log(sum2(10)(20)(30));