function foo() {
    console.log(this);
}

obj = {
    name: 'why',
    foo: foo
}
obj.foo()
// obj
