// instanceof：用于检测构造函数的prototype，是否出现在某个实例对象的原型链上
function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, 'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}

function Person() { }

function Student() { }

inheritPrototype(Student, Person)

var stu = new Student()

console.log(stu instanceof Student);// true
console.log(stu instanceof Person);// true
