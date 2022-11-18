function Student(name, age) {
    this.name = name
    this.age = age

}

function Teacher() {

}

// const stu = new Student('coder', 18)
// console.log(stu);// Student { name: 'coder', age: 18 }
// console.log(stu.__proto__ === Student.prototype); // true

// 执行Student函数中的内容，但是创建出来的对象是Teacher对象
const teacher = Reflect.construct(Student, ['why', 18], Teacher)
console.log(teacher);// Teacher { name: 'why', age: 18 }
console.log(teacher.__proto__ === Teacher.prototype); //true