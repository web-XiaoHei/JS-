// console.log(foo);//undefined
// var foo = "foo"

// ReferenceError: Cannot access 'bar' before initialization
// let/const没有作用域提升 先声明后使用
// foo被创建出来了，但是不能被使用
// 作用域提升：能提前被访问
console.log(bar);
let bar = "bar"