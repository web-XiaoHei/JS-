function foo() {

}
// 函数也是一个对象
console.log(foo.__proto__); //{}
// 函数作为对象来说，它也是有原型对象的

// 函数因为是一个函数，所以它还会多出来一个显示的原型属性：prototype
console.log(foo.prototype);

var f1 = new foo()
var f2 = new foo()

console.log(f1.__proto__ === foo.prototype); //true
console.log(f2.__proto__ === foo.prototype); //true