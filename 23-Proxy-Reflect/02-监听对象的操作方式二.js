const obj = {
    name: 'why',
    age: 18
}

const objProxy = new Proxy(obj, {
    // 获取值时的捕获器
    get: function (target, key) {
        console.log(`获取值时的捕获器${key}`);
        return target[key]
    },

    // 设置值时的捕获器
    set: function (target, key, newValue) {
        console.log(`设置值时的捕获器${key}-新增${newValue}`);
        target[key] = newValue
    }
})

// console.log(objProxy.name);
// console.log(objProxy.age);

objProxy.age = 20
objProxy.name = 'theShy'

console.log(obj);// { name: 'theShy', age: 20 }