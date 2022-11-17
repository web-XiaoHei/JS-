// 每个对象都有一个[[prototype]],这个属性可以称之为对象的原型（隐式原型）
var obj = { name: "kobe", age: 18 }

var info = {}

// 早期的ECMA是没有规范如何去查看
// 给对象中提供了一个属性，可以让我们查看一下这个原型对象（浏览器提供）
// __proto__

console.log(obj.__proto__); //[Object: null prototype] {}
console.log(info.__proto__); //[Object: null prototype] {}

// ES5之后提供的Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj)); //  {}


// 2.原型的作用
// 当我们从一个对象中获取某一个属性时，它会触发[[get]]的操作
// 1.在当前对象中查找该属性，如果找到就直接使用
// 2.如果没有找到，就沿着原型链去查找[[prototype]]