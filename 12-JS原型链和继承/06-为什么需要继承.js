// student
function Student(name, age, sno) {
    this.name = name
    this.age = age
    this.sno = sno
}

Student.prototype.running = function () {
    console.log(this.name + 'running~');
}
Student.prototype.eatting = function () {
    console.log(this.name + 'eatting~');
}
Student.prototype.studing = function () {
    console.log(this.name + 'studing~');
}

//Teacher

// student
function Teacher(name, age, title) {
    this.name = name
    this.age = age
    this.title = title
}

Teacher.prototype.running = function () {
    console.log(this.name + 'running~');
}
Teacher.prototype.eatting = function () {
    console.log(this.name + 'eatting~');
}
Teacher.prototype.teaching = function () {
    console.log(this.name + 'teaching~');
}