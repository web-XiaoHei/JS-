// WeakMap 和 Map的区别
// 区别一：只能存放对象类型
// 区别二：对对象是一个弱引用

const obj = { name: "obj" }

const map = new Map()
map.set(obj, 'aaa')

const weakMap = new WeakMap()
weakMap.set(obj, 'bbb')

// weakMap常用方法
// set
// get
// has
// delete
// 特殊：没有clear、size 没法遍历


