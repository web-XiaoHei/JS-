// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(11111)
        reject(1111)
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(22222)
        reject(22222)
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(333333)
        reject(33333)
    }, 1000)
})

Promise.any([p1, p2, p3]).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);// err: [AggregateError: All promises were rejected]
    console.log('err:', err.errors);// err: [ 1111, 22222, 33333 ]
})
