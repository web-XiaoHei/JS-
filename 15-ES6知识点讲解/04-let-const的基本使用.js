var foo = "abc"

let bar = "bar"

const name = "abc"

// 注意事项一： const 本质上是传递的值不可以修改
// 但是如果传递的是一个引用类型（内存地址）,可以通过引用找到对应的对象，去修改对象内部的属性
const obj = {
    foo: 'foo'
}


// 注意事项二：通过let/const 定义的变量名不可以重复声明


