function foo(m, n, ...args) {
    console.log(m, n, args);
    console.log(Array.isArray(args));//true

}

foo(20, 30, 40, 50, 60)//20 30 [ 40, 50, 60 ]