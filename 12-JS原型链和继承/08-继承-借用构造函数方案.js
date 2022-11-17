// 父类：公共属性和方法
function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}

Person.prototype.eating = function () {
    console.log(this.name + '在吃饭');
}

// 子类：特有属性和方法
function Student(name, age, friends, sno) {
    Person.call(this, name, age, friends)
    this.sno = 111
}

var p = new Person()
Student.prototype = new Person()
Student.prototype.studing = function () {
    console.log(this.name + '在学习');
}

var stu = new Student("why", 18, ["kobe", "james", "brant"])
var stu1 = new Student("why", 18, ["kobe", "james", "brant"])
var stu2 = new Student("why", 18, ["kobe", "james", "brant"])

// console.log(stu, 'stu');
stu1.friends.push("luck")
console.log(stu1.friends);//[ 'kobe', 'james', 'brant', 'luck' ]
console.log(stu2.friends);//[ 'kobe', 'james', 'brant' ]

// Person {
//     name: 'why',
//     age: 18,
//     friends: [ 'kobe', 'james', 'brant' ],
//     sno: 111
//   }


// 借用继承的做法非常简单：在子类型构造函数的内部调用父类型构造函数
//  因为函数可以在任意的时刻被调用
//  因此通过apply()和call()方法也可以在新创建的对象上执行构造函数

//  强调：借用构造函数也是有弊端
//  1.Person函数至少被调用了两次
//  2.第二个弊端：stu的原型对象上多了一些属性，但是这些属性是没有存在的必要的
