// 1.创建对象方式一
var obj = new Object()
obj.name = "kobe"
obj.age = 18
obj.running = function () {
    console.log(this.name + '在跑步');
}

// 2.字面量的形式创建对象
var obj2 = {
    name: 'james',
    age: 40,
    running: function () {
        console.log(this.name + '在跑步');
    }
}