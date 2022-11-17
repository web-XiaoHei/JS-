var obj = {
    name: "kobe",
    age: 18
}
// 原型式继承函数
// function createObject1(o) {
//     var newObj = {}
//     Object.setPrototypeOf(newObj, o)
//     return newObj
// }
function createObject2(o) {
    function Fn() { }
    Fn.prototype = o
    var newObj = new Fn()
    return newObj

}
// var info = createObject2(obj)
var info = Object.create(obj)

console.log(info);//{} 
console.log(info.__proto__);//{ name: 'kobe', age: 18 } 