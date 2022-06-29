var obj = {
    name: "obj",
    foo: function () {
        console.log(this);
    }
}

obj.foo() // 隐式绑定 this所指向{ name: 'obj', foo: [Function: foo] }
//1. call/apply的显式绑定优先级高于隐式绑定
obj.foo.call("abc")// 显式绑定 [String: 'abc']

//2. bind的显示绑定绑定优先级高于隐式绑定
var bar = obj.foo.bind("cba")
bar()//[String: 'cba']

// 3.更明显的比较
function foo() {
    console.log(this);
}

var obj = {
    name: 'obj',
    foo: foo.bind("aaa")
}

obj.foo()//[String: 'aaa']


