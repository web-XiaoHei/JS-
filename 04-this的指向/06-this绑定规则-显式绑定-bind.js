function foo() {
    console.log(this);
}
// 默认绑定和显示绑定bind冲突：优先级（显示绑定）
var newFoo = foo.bind("aaa")
newFoo()// [String: 'aaa']

