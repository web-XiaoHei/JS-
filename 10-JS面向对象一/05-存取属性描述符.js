// var obj = {
//     name: 'kobe',
//     age: 18
// }

// // 存储属性描述符
// // 1.隐藏某一个私有属性不希望直接被外界使用和赋值
// // 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存储描述符
// Object.defineProperty(obj, "address", {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//         return this._address
//     },
//     set: function (value) {
//         this._address = value
//     }
// })

// obj.address = "上海市"
// console.log(obj.address);
var obj = {
    name: 'kobe',
    age: 18
}

// 存储属性描述符

// 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存储描述符
Object.defineProperty(obj, "address", {
    enumerable: true,
    configurable: true,
    get: function () {
        foo()
        return this._address
    },
    set: function (value) {
        bar()
        this._address = value
    }
})

obj.address = "上海市"
function foo() {
    console.log("get时触发截获信息");
}
function bar() {
    console.log("set时触发");
}
console.log(obj.address);
// 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存储描述符