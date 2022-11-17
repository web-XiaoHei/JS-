function foo() {
    console.log(this);
}

// 1.直接调用这个函数
foo()// window

// 2.创建一个对象，对象中的函数指向foo
var obj = {
    name: 'why',
    foo: foo
}
obj.foo()//obj

// 3.apply调用
foo.apply("abc")//字符串 abc