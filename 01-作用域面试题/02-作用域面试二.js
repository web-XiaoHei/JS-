function foo() {
    console.log(n);
    var n = 200
    console.log(n);
}

var n = 100
foo() // undefined 200
// 编译过程：创建global object {n:undefined,foo:foo的地址}
// 执行过程：1. global object {n:100,foo:foo的地址}
//          2. 执行foo，创建foo的函数执行上下文{n:undefined}
//          3. 继续执行函数体，foo的函数执行上下文{n:200}
//          4. 第二次打印 结果为200