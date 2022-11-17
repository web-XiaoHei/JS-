var obj = {
    name: 'why',
    age: 19
}
//[[get]]操作
// 1.在当前对象中查找属性
// 2.如果没有找到，这个时候会去原型对象上（__proto__）查找


console.log(obj.address);//undefined
obj.__proto__ = {
    // address: '北京市'
}
// console.log(obj.address);//北京市

obj.__proto__.__proto__ = {
    address: "上海市"
}

console.log(obj.address);