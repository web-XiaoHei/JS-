// 1.常规函数
// function foo(arg) {
//     console.log("foo",arg);
// }

// foo(123)

// 2.函数作为另外一个函数的参数传递
// function foo(aaa) {
//     aaa()
// }

// function bar() {
//     console.log("bar");
// }

// foo(bar)

// 3.函数作为返回值
// js允许函数内部再定义函数
function foo() {
    function bar() {
        console.log("bar");
    }

    return bar
}

var fn = foo()
fn()
