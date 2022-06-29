// 经典案例
// 强调：如果函数体只有一行代码，可以省略{}
//       并且它会默认将这行代码的执行结果作为返回值

var nums = [1, 11, 22, 333, 44, 22]
var result = nums.filter(item => item % 2 == 0).map(item => item * 100).reduce((pre, item) => pre + item)

console.log(result);


var foo = () => {
    console.log(this);
}

foo()
var obj = { foo }
obj.foo()
foo.call("abc")

// window