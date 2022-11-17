// 柯里化函数的实现hyCurrying
function hyCurrying(fn) {
    return function curried(...args) {
        // 判断当前已经接受的参数的个数，和参数本身需要接受的参数是否一致
        // 1.当已经传入的参数 大于等于 需要的参数时，就执行函数
        if (args.length >= fn.length) {
            return fn.apply(this, args)
            // fn.call(this, ...args)
        } else {
            // 2.当没有达到个数时，需要返回一个新的函数，继续来接收的参数
            return function (...args2) {
                // 3.当接收到参数后，需要递归调用curried来检查函数的个数是否达到
                return curried.apply(this, [...args, ...args2])
            }
        }
    }
}

function add(x, y, z) {
    x = x + 2
    y = y * 2
    z = z * z

    return x + y + z
}

var curryAdd = hyCurrying(add)
console.log(curryAdd(10, 20, 30));
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));