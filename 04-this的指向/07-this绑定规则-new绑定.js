// 我们通过一个new关键字调用一个函数时(构造器),这个时候this绑定的是在调用这个构造器时创建出来的对象
// this = 创建出来的对象(实例化对象)
function Person(name, age) {
    this.name = name
    this.age = age
}


var p1 = new Person("kobe", 18)
console.log(p1.name, p1.age);

var p2 = new Person("James", 20)

