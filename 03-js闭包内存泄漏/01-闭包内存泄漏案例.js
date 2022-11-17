function createFnArray() {
    var arr = new Array(1024 * 1024).fill(1)

    return function () {
        console.log(arr.length);
    }
}
// var foo = createFnArray()
// foo()

// foo = null
var arrayFn = []
for (var i = 0; i < 100; i++) {
    arrayFn.push(createFnArray())
}

setTimeout(() => {
    console.log("定时器的执行");
    for (var a = 0; i < 50; i++) {
        arrayFn.pop()
    }
}, 2000)

