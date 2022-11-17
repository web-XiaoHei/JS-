function foo() {

}

// console.log(foo.prototype); {}

const f = new foo()
// console.log(f.__proto__ == foo.prototype);

const bar = () => { }
console.log(bar.prototype);//undefined
