// function foo() {
//     // Promise
//     return new Promise()
// }

class Person {
    constructor(callbanck) {
        let foo = function () { }
        let bar = function () {

        }
        callbanck(foo, bar)
    }
}

const p = new Person(() => {
    console.log(111);
})

// 传入的这个函数，被称之为executor
// reslove:回调函数，在成功时，回调reslove函数
// reject：回调函数，在失败时，回调reject函数
const PromiseCreate = new Promise((reslove, reject) => {
    console.log('promise传入的函数被执行了');
    reslove()
})
// then 方法传入的回调函数，会在promise执行reslove函数时，被回调
PromiseCreate.then(() => {

})
// catch 方法传入的回调函数，会在promise执行reject函数时，被回调
PromiseCreate.catch(() => {

})