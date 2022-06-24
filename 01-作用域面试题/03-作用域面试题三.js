var n = 100
function foo1() {
    console.log(n);
}

function foo2() {
    var n = 200
    console.log(n);
    foo1()
}

foo2() // 200 100
console.log(n); //100

// 编译过程 创建global object { n：undefined foo1:foo1的地址 foo2：foo2的地址}
// 执行过程 1. global object { n：100 foo1:foo1的地址 foo2：foo2的地址}
//         2. 执行foo2 ，创建foo2的执行上下文，创建foo2的Ao对象{n:undefined foo1:foo1的地址 }
//         3. 继续执行，foo2的Ao对象{n:200 foo1:foo1的地址}
//         4. 执行打印 第一次打印的从foo2的Ao对象中可以找到n 结果为200
//         5. 执行foo1，创建foo1的函数执行上下文，创建foo1的Ao对象{}
//         6. 继续执行foo1函数体，打印n，从foo1的Ao对象中找不到，从上级作用域（window）找n=100
//         7. 执行最后一步打印，从global object { n：100 foo1:foo1的地址 foo2：foo2的地址}找到n