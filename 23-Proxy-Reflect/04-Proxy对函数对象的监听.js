function foo() {

}

const fooProxy = new Proxy(foo, {
    apply: function (target, thisArg, argArray) {
        console.log(`apply调用时触发的捕获器`);
        target.apply(thisArg, argArray)
    },
    construct: function (target, argArray) {
        console.log(`new调用时触发的捕获器`);
        return new target(...argArray)
    }
})

foo()
fooProxy.apply({}, ['abc', 'cba'])
new fooProxy("abc", 'cba')