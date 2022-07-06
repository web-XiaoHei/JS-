function Person() {

}

var p = new Person()

console.log(p instanceof Person); // true
console.log(Person.prototype.isPrototypeOf(p)); // true