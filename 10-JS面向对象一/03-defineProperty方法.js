var obj = {
    name: "why",
    age: 18
}

// 属性描述符是一个对象
Object.defineProperty(obj, "height", {
    // 很多的配置
    value: 1.88
})

console.log(obj);
console.log(obj.height);

// Configurable :表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
//    当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]默认为true
//    当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false
// Enumerable：表示属性是否可以通过for-in或者Object.keys()返回该属性
//    当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]默认为true
//    当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false
// Writable：表示是否可以修改属性的值
//    当我们直接在一个对象上定义某个属性时，这个属性的[[Writable]]默认为true
//    当我们通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false
// Value：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改 默认undefined