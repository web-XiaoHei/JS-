// WekSet跟Set的区别
// 区别一：只能存放对象类型
// 区别二：对对象是一个弱引用

const weakSet = new WeakSet()
// weakSet.add(10) // Invalid value used in weak set

let obj = {
    name: 'why'
}
const set = new Set()

set.add(obj) // 强引用
weakSet.add(obj) // 弱引用

// weakSet常见的方法
// add delate has
// 没有clear

// weakSet的应用场景
const personSet = new WeakSet()
class Person {
    constructor() {
        personSet.add(this)
    }
    running() {
        if (personSet.has(this)) {
            throw new Error('不能通过非构方法创建出来的对象调用running方法')
        }
        console.log('running', this);
    }
}

const p = new Person()
p.running()
p.running.call({ name: 'abc' })