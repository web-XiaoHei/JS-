var obj = {
    name: "why",
    age: 18
}

// 获取属性
console.log(obj.name);

// 给属性赋值
obj.name = "kobe"
console.log(obj.name);

// 删除属性
delete obj.age
console.log(obj);

// 需求：对属性进行操作时，进行一些限制
// 限制：不允许某一个属性被赋值/删除/遍历

for (var key in obj) {
    console.log(key);
}

// 属性描述符  Object.defineProperty(对象,"属性",属性描述符)

Object.defineProperties(obj, 'height', {

})