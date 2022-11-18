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
    },

    // 监听in的捕获器
    has: function (target, key) {
        console.log(`监听到对象的${key}属性in操作符`, target);
    },

    // 监听delete的捕获器
    deleteProperty: function (target, key) {
        console.log(`监听对象的${key}属性被删除操作`, target);
        delete target[key]
    },

    // setPrototypeOf               Object.setPrototypeOf方法的捕获器
    // getPrototypeOf               Object.getPrototypeOf方法的捕获器
    // isExtensible                 Object.isExtensible方法的捕获器
    // preventExtensions            Object.preventExtensions方法的捕获器
    // getOwnPropertyDescriptor     Object.getOwnPropertyDescriptor方法的捕获器
    // defineProperty               Object.defineProperty方法的捕获器        
    // ownKeys                      Object.getOwnpropertyNames方法和的Object.getOwnPropertySymbols方法的捕获器捕获器   
    // apply                        函数调用操作捕获器   
    // construct                    new操作符的捕获器

})

// in操作符
console.log("name" in objProxy);

// delete操作
delete objProxy.name
console.log(obj);
