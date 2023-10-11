// 转成Promise对象
// function foo() {
//     const obj = { name: 'why' }
//     return new Promise((resolve, reject) => {
//         resolve(obj)
//     })
// }

// foo().then(res => {
//     console.log('res:', res);
// })

// 类方法Promise.resolve
// 1.普通的值
// const promise = Promise.resolve({ name: 'why' })
// 相当于
// const promise1 = new Promise((resolve, reject) => {
//     resolve({ name: 'why' })
// })
// console.log(promise1);

// 2.传入Promise
const promise = Promise.resolve(new Promise((resolve, reject) => {
    resolve('121111')
}))

promise.then(res => {
    console.log('res:', res);
})

// 3.传入一个thenable对象

