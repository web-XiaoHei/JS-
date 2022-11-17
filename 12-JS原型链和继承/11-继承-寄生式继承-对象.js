var personObj = {
    running: function () {
        console.log("running");
    }
}

function createStudent(name) {
    var stu = Object.create(personObj)
    stu.name = name
    stu.studying = function () {
        console.log("studing");
    }
}

var stuObj = createStudent('why')

