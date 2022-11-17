// 案例一
// function foo() {
//     console.log(this);
// }

// obj = {
//     name: 'why',
//     foo: foo
// }
// obj.foo()
// // obj

// 案例二
var obj1 = {
    name: 'obj1',
    foo: function () {
        console.log(this);
    }
}

var obj2 = {
    name: 'obj2',
    bar: obj1.foo
}

obj2.bar()//obj2

