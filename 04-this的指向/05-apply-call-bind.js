function foo() {
    console.log("foo被调用了", this);
}

// foo直接调用和call/apply调用的不同在于this的绑定不同
// foo直接调用指向的是window
// foo()

var obj = {
    name: 'obj'
}
// call/apply是可以指定this的绑定对象

foo.call(obj)
foo.apply(obj)
foo.apply("aaaa")

// call和apply有什么区别？
// call和apply调用函数传入参数的方式不同

function foo1(num1, num2) {
    console.log(num1 + num2, this);
}
// (method)Function.apply(this:Function,thisArg:any,argArray?:any):any
foo1.apply("apply", [20, 30])
// (method)Function.call(this:Function,thisArg:any,...argArray?:any[]):any
foo1.call("call", 20, 30)