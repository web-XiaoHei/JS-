// function sum(m, n) {
//     return m + n
// }

// // 假如在程序中，我们经常需要把5 和另外一个数字进行相加
// console.log(sum(5, 10));

function makeAdder(count) {
    return function (num) {
        return count + num
    }
}

// var result = makeAdder(5)(10)
// console.log(result);

var adder5 = makeAdder(5)
var result = adder5(10)

console.log(result);
