var names = ["kobe", "james", "kuli"]
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._address = "上海市"
    }
    // 普通的实例方法
    // 创建出来的对象进行访问
    // var p = new Person()
    // p.eatting()
    eatting() {
        console.log(this.name + ' eatting');
    }
    // 类的访问器
    get address() {
        console.log("拦截访问操作");
        return this._address
    }

    set address(newAddress) {
        console.log("拦截设置操作");
        this._address = newAddress
    }

    // 类的静态方法(类方法)
    // Person.createPerson()
    // static createPerson() {
    //     console.log("类的静态方法");
    // }

    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]

        var age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
}

var p1 = new Person('why', 18)
var p2 = new Person('kobe', 30)

p1.eatting()

// console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(p1.address);
p1.address = "北京市"

// p1.createPerson()//p1.createPerson is not a function
// 类的静态方法是由类名调用
// Person.createPerson()

for (var i = 0; i < 50; i++) {
    console.log(Person.randomPerson());
}
