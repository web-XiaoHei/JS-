// const promise = Promise.reject("rejected message")
//相当于
// const promise2 = new Promise((resolve, reject) => {
//     reject("rejected message")
// })
// promise2.catch(res => {
//     console.log(res);
// })
// console.log(promise2);

// 注意：无论传入什么值都是一样的
const promise = Promise.reject({
    then: function (resolve, rejcect) {
        resolve('11111')
    }
})

promise.then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
})