// 第一个参数依然是模板字符串重整个字符串，只是被切成多块，放到一个数组中
// 第二个参数是模板字符串中，第一个${}
function foo(m, n, x) {
    console.log(m, n, x, '-----------');
}

// foo('Hello', "world")

// 另外调用函数的方式：标签模板字符串
foo`` // [ '' ] undefined -----------

foo`Hello World` // [ 'Hello World' ] undefined -----------
const name = 'why'
const age = 18
foo`Hello${name}Wo${age}rld`// [ 'Hello', 'Wo', 'rld' ] why -----------