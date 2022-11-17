var p1 = {
    name: "张三",
    age: 18,
    height: 1.88,
    address: "北京",
    eating() {
        console.log(this.name + "在吃饭");
    },
    running() {
        console.log(this.name + "在跑步");
    }
}