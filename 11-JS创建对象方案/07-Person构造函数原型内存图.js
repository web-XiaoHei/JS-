function Person() {

}

var p1 = new Person()
var p2 = new Person()

console.log(Person.prototype === p1.__proto__);
console.log(Person.prototype === p2.__proto__);

p1.name = "kobe"
p1.__proto__.name = "james"
Person.prototype.name = "james"
console.log(p2.__proto__.name);
p2.__proto__.name = "curry"

console.log(p2.__proto__.name);