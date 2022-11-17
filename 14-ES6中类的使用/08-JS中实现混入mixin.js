class Person {

}

class Runner {
    running() {

    }
}
class Eater {
    eatting() {

    }
}

// JS中类仅支持单继承
// class Student extends Person, Runner {

// }

function mixinRunner(BaseClass) {
    class newClass extends BaseClass {
        running() {
            console.log('running');
        }
    }
    return newClass
}

function mixinEater(BaseClass) {
    return class extends BaseClass {
        eatting() {
            console.log("eating");
        }
    }
}
class Student extends Person {

}
// var NewClass = mixinRunner(Student)
// var ns = new NewClass()
// ns.running()

// var NewEatClass = mixinEater(Student)
// var nsEat = new NewEatClass()
// nsEat.eatting()

var NewClass = mixinEater(mixinRunner(Student))
var ns = new NewClass()
ns.running()
ns.eatting()
