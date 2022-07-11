// ES5中式没有块级作用域
// 快代码（black code）
{
    // 声明一个对象
    var foo = 'foo'
}

// 在ES5中只有两个东西会形成作用域
// 1.全局作用域
// 2.函数作用域
function foo() {
    var bar = "bar"
}

console.log(bar);//ReferenceError: bar is not defined