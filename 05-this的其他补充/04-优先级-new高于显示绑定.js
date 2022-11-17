// 结论：new关键字不能和apply/call一起来使用
// 只能比较new  bind
function foo() {
    console.log(this);
}
var bar = foo.bind('aaa')

var obj = new bar()