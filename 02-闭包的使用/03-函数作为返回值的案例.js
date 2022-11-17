function makeAdder(counter) {
    function add(num) {
        return counter + num
    }
    return add
}

var add5 = makeAdder(5)
console.log(add5(5));
console.log(add5(10));

// 高阶函数：把一个函数如果接受另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数就称为一个高阶函数