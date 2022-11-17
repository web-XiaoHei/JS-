// ES5以及之前给参数默认值
/** 
 * 缺点：
 * 1.写起来很麻烦，并且代码的阅读性是比较低的
 * 2.这种写法有bug
*/
// function foo(m, n) {
//     m = m || 'aaa'
//     n = n || 'bbb'
//     console.log(m, n);
// }


// ES6可以给函数参数提供默认值 
function foo(m = 1, n = 2) {
    console.log(m, n);
}

foo()

// 对象参数和默认值以及解构
// function printInfo(info = { name: 'why', age: 18 }) {
//     console.log(info.name, info.age);
// }

// function printInfo({ name, age } = { name: 'why', age: 18 }) {
//     console.log(name, age);
// }

function printInfo({ name = 'why', age = 18 } = {}) {
    console.log(name, age);
}

printInfo()
// printInfo({ name: 'zhaokai', age: 28 })

// 有默认值的形参最好放到后面
function bar(z = 30, x, y) {
    console.log(x, y, z);
}
bar(10, 20) // 20 undefined 10
bar(undefined, 10, 20) // 10 20 30

function foo1(x, y, z = 30) {
    console.log(x, y, z);
}
foo1(10, 20) // 10 20 30
foo1(undefined, 10, 20) // undefined 10 20


// 4.有默认值的函数的length属性
function baz(x, y, z) {
    console.log(x, y, z);
}

function baq(x, y, z = 30) {
    console.log(x, y, z);
}
// 有默认值，从默认值参数开始，包含默认参数以及后续参数都不属于length计算范围之内
console.log(baq.length, 'baq.length');// 2