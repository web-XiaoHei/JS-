var obj = {
    name: "why",
    age: 18
}

Object.defineProperty(obj, "address", {
    // 很多配置
    value: "北京市",
    // 该属性不可删除/也不可以重新定义属性描述符
    // configurable: false
    // 该属性是配置对应的属性（address）是否可以枚举
    enumerable: false,
    // 该特性是控制属性是否可以赋值（写入值）
    writable: false

})
delete obj.name
console.log(obj.name);
delete obj.address
console.log(obj.address);
// Object.defineProperty(obj, "address", {
//     // 很多配置
//     value: "广州市",
//     // 该属性不可删除/也不可以重新定义属性描述符
//     configurable: false
// })