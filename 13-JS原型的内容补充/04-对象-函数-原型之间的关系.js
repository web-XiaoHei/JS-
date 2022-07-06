var obj = {
    name: 'why'
}

console.log(obj.__proto__);

// 对象里面有一个__proto__对象：隐式原型对象

// Foo是一个函数，那么它会有一个显示原型对象：Foo.prototype
// Foo.prototye来自哪里？
// 答：创建了一个函数,Foo.prototye = {constructor:Foo}

// Foo是一个对象，那么它会有一个隐式原型对象: Foo.__proto__
// Foo.__proto__来自哪里？
// 答：new Function() Foo.__proto__  = Foo.prototye
// Foo.prototye = { constructor : Function }

// var Foo = new Function()

function Foo() {

}

console.log(Foo.prototype == Foo.__proto__);// false
console.log(Foo.prototype.constructor);// [Function: Foo]
console.log(Foo.__proto__.constructor);// [Function: Function]