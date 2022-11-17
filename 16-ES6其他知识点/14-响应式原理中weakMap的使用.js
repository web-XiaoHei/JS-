// weakMap应用场景（vue3响应式原理）
const obj1 = {
    name: 'why',
    age: 18
}
function obj1NameFn1() {
    console.log('obj1NameFn1被执行');
}
function obj1NameFn2() {
    console.log('obj1NameFn2被执行');
}
function obj1AgeFn1() {
    console.log('obj1NameFn1被执行');
}
function obj1AgeFn2() {
    console.log('obj1NameFn2被执行');
}

const obj2 = {
    name: 'coderwhy',
    height: 1.88,
    address: "广州市"
}

function obj2NameFn1() {
    console.log('obj2NameFn1');
}
function obj2NameFn2() {
    console.log('obj2NameFn2');
}

// 1.创建weakMap
const weakMap = new WeakMap()

// 2.收集依赖结构
// 2.1对obj1进行依赖结构的收集
const obj1Map = new Map()
obj1Map.set("name", [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
weakMap.set(obj1, obj1Map)

const obj2Map = new Map()
obj2Map.set('name', [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 3.如果obj1/obj2.name发生了改变
// Proxy/Object.defineProperty
obj1.name = 'james'
const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(item => item())

