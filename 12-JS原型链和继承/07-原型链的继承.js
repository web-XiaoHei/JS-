// 父类：公共属性和方法
function Person() {
    this.name = "why"
    this.friends = []
}

Person.prototype.eating = function () {
    console.log(this.name + '在吃饭');
}

// 子类：特有属性和方法
function Student() {
    this.sno = 111
}

Student.prototype = new Person()
Student.prototype.studing = function () {
    console.log(this.name + '在学习');
}

var stu = new Student()
// console.log(stu.name);

// 原型链实现继承的弊端：
// 1.打印stu对象，某些属性是看不到的
// console.log(stu);// Person { sno: 111 }
// console.log(stu.name); //why

// 2.创建两个stu对象
var stu1 = new Student()
var stu2 = new Student()

// console.log(stu1.friends === stu2.friends);//true
stu1.friends.push("kobe")
console.log(stu2.friends); // [ 'kobe' ]

stu1.name = "james"
console.log(stu2.name);// why  原因是：实例化对象中查不到，自动创建并赋值

// 3.第三个弊端：在前面实现类的过程中都没有传递参数