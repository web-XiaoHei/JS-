function foo() {
    var a = b = 100
}

foo()

console.log(a); // a is not defined
console.log(b); // 100