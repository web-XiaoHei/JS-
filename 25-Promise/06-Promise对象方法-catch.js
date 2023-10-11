// const promise = new Promise((resolve, reject) => {
//     // resolve()
//     reject('rejected status')
//     // throw new Error("rejected status")
// })

// 1.当executor抛出异常时，也是会调用错误（拒绝）捕获的回调函数
// promise.then(undefined, err => {
//     console.log('err:', err);
// })

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
// promise.catch(err => {
//     console.log('err:', err);
// })

// promise.then(res => {
//     return new Promise((reslove, reject) => {
//         reject('then rejected')
//     })
// }).catch(err => {
//     console.log('err:', err);
// })

// 3.拒绝捕获的问题之前遇到的
// const promise1 = new Promise((resolve, reject) => {
//     // resolve()
//     reject('rejected status')
//     // throw new Error("rejected status")
// })

// promise1.then(res => {
//     // throw new Error("then error message1")
// }).then(res => {
//     // throw new Error("then error message")
// }).catch(err => {
//     console.log("err:", err);
// })

// 4. catch方法的返回值
const promise = new Promise((resolve, reject) => {
    // resolve()
    reject('1111')
    // throw new Error("rejected status") 
})

promise.then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
    return "catch return value"
}).then(res => {
    console.log('res result:', res);
}).catch(err => {
    console.log('err result:', err);
})