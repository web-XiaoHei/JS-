// 单一职责原则
// 希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理

// 需求：1.第一个参数加二 2.第二个参数乘二 3.第三个参数乘以自己
function add(x, y, z) {
    x = x + 2
    y = y * 2
    z = z * z

    return x + y + z
}

console.log(add(10, 20, 30));

function sum(x) {
    x = x + 2
    return function (y) {
        y = y * 2
        return function (z) {
            z = z * z
            return x + y + z
        }
    }
}

console.log(sum(10)(20)(30));