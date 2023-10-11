let activeReactiveFn = null
/**
 * Depend优化
 * 1.depend方法
 * 2.使用Set来保存依赖函数，而不是数组
 */
class Depend {
    constructor() {
        this.reactiveFn = new Set()
    }
    // addDepend(reactiveFn) {
    //     this.reactiveFn.add(reactiveFn)
    // }
    depend() {
        if (activeReactiveFn) {
            this.reactiveFn.add(activeReactiveFn)
        }
    }
    notify() {
        console.log(this.reactiveFn);
        this.reactiveFn.forEach(fn => fn())
    }
}
// 封装一个响应式的函数
function watchhFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}
// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
    // 根据target对象获取map的过程
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }

    // 根据key获取depend对象
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }

    return depend
}
// 对象的响应式
const obj = {
    name: "why", // depend对象
    age: 18 // depend对象
}

// 创建响应式函数
function reactive(obj) {
    return new Proxy(obj, {
        get: function (target, key, receiver) {
            // 根据target.key获取对应的depend
            const depend = getDepend(target, key)
            // 根据depend对象中添加响应函数
            depend.depend()
            // depend.addDepend(activeReactiveFn)

            return Reflect.get(target, key, receiver)
        },
        set: function (target, key, newValue, receiver) {

            Reflect.set(target, key, newValue, receiver)
            const depend = getDepend(target, key)
            depend.notify()
        }
    })
}

// 监听对象的属性变化：Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = reactive(obj)


watchhFn(function () {
    console.log(objProxy.name);
})

watchhFn(function () {
    console.log(objProxy.age);
})

console.log(objProxy.age);


