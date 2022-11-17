"use strict"

var message = "Hello World"
console.log(message);

// true.foo = "abc"

function foo() {
    "use strict"
    true.foo = "abc"
}

foo()