function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: 'obj'
}

var nums = [1, 2, 3]

nums.forEach(foo, obj)