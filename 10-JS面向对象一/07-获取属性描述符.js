var obj = {
    // 私有属性
    _age: 18
}

Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "why"
    },
    age: {
        configurable: true,
        enumerable: true,
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }

})

// 获取某一个特性属性的属性描述符
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// 获取对象所有的属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));