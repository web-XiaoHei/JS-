// with语句：可以形成自己的作用域
var obj = { name: "why", age: 18 }
function foo() {
    function bar() {
        with (obj) {
            console.log(message);
        }
    }
    bar()
}
foo()

// message 先从obj这个对象中查找，再从上层作用域查找