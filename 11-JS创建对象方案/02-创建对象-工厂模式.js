function createPerson(name, age, height, address) {
    var p = {}
    p.name = name
    p.age = age
    p.height = height
    p.address = address

    p.eating = function () {
        console.log(this.name + "在吃东西");
    }
    p.running = function () {
        console.log(this.name + "跑步");
    }
    return p
}

var p1 = createPerson("张三", 18, 1.88, "广州市")
var p2 = createPerson("李四", 20, 1.70, "北京市")

// 工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1, p2);

