function calcArea(foo) {
    console.log(foo.getArea());
}

var obj1 = {
    name: 'why',
    getArea() {
        return 1000
    }
}

class Person {
    getArea() {
        return 100
    }
}

var p = new Person()

calcArea(p)
calcArea(obj1)