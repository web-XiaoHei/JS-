var name = "why"
var age = 19

var obj = {
    // 1.property shorthand(属性的简写)
    name,
    age,
    // 2.method shorthand(方法的简写)
    foo: function () {

    },
    bar() {

    },
    // 3.computed property name(计算属性名)
    [name + 123]: "why"
}
console.log(obj);
// {
//     name: 'why',
//     age: 19,
//     foo: [Function: foo],
//     bar: [Function: bar],
//     why123: 'why'
//   }