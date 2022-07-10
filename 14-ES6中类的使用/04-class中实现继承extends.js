class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    running() {
        console.log(this.name + ' running');
    }
    personMethods() {
        console.log("处理逻辑1");
        console.log("处理逻辑2");
        console.log("处理逻辑3");
    }
    static personStaticMethods() {
        console.log("personStaticMethods");
    }
}

class Student extends Person {
    // JS引擎在解析子类的时候就有要求,如果我们有实现继承
    // 那么子类的构造方法中,在使用this之前 
    // 需要调用父类的构造方法
    // 
    constructor(name, age, sno) {
        super(name, age)

        this.sno = sno
    }
    //子类对父类方法的重写
    running() {
        console.log(this.name + ' 子类对父类方法的重写');
    }

    // 重新父类方法的部分类容
    personMethods() {
        super.personMethods()

        console.log("处理逻辑4");
        console.log("处理逻辑5");
        console.log("处理逻辑6");
    }
}
var stu1 = new Student("kobe", 30, 111)
console.log(stu1);

stu1.running()
stu1.personMethods()

// 子类有将父类的静态方法也继承下来  当然，也可以重写
Student.personStaticMethods()