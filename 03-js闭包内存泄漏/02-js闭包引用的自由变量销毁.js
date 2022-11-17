function foo() {
    var name = "why"
    var age = 18

    function bar() {
        debugger
        console.log(name);
    }

    return bar
}

var fn = foo()
fn()
// Closure 闭包
