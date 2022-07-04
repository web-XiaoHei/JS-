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
    // age: {
    //     configurable: true,
    //     enumerable: true,
    //     get: function () {
    //         return this._age
    //     },
    //     set: function (value) {
    //         this._age = value
    //     }
    // }

})
var obj1 = {
    // 私有属性
    // configurable/enumerable 为默认值true时
    _age: 18,
    set age(value) {
        this._age = value
    },
    get age() {
        return this.age
    }
}
console.log(obj1);// { _age: 18, age: [Getter/Setter] }