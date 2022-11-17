var foo = 'foo'
// if (true) {
//     console.log(foo);// Cannot access 'foo' before initialization
//     let foo = 'abc'
// }

function bar() {
    console.log(foo);

    let foo = 'abc'
}

bar()