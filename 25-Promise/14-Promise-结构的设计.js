// ES6 ES2015
// Future/Defered/Promise/PromiseA
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfiled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                this.value = value
                console.log('resolve函数被调用了');
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECTED
                this.reason = reason
                console.log('reject函数被调用了');
            }
        }
        executor(resolve, reject)
    }
}

const promise = new HYPromise((resolve, reject) => {
    console.log("传入的函数被直接调用了");
    resolve()
    reject()
})

promise.then()


