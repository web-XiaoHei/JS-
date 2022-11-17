function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, 'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}
function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}

Person.prototype.running = function () {
    console.log("running");
}
Person.prototype.eatting = function () {
    console.log("eatting");
}

function Student(name, age, friends, sno, scode) {
    Person.call(this, name, age, friends)
    this.sno = sno
    this.scode = scode
}

inheritPrototype(Student, Person)


Student.prototype.studing = function () {
    console.log("studing");
}

var stu = new Student("kobe", 18, ["james", "why", "lucy"], 1112, 99)
stu.studing()
console.log(stu);
stu.eatting()
stu.running()

console.log(stu.constructor.name);