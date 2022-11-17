var n = 100
function foo() {
    n = 200
}

foo()

// console.log(n);200
// 解题思路：
// 编译过程：创建global object {n:undefined,foo:foo的地址}
// 执行过程：1. global object {n：100，foo:foo的地址}
//          2. 执行foo，创建foo的执行上下文{ }， n在自身的作用域查找不到查找上层作用域
//          3. 将global object {n：200，foo:foo的地址}
//          4. 打印，结果为200 