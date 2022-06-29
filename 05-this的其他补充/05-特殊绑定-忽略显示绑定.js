function foo() {
    console.log(this);
}

foo.apply("abc")
foo.apply({})

foo.apply(null)//window
foo.apply(undefined)//window

var bar = foo.bind(null)
foo()//window