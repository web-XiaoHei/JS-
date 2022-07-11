var obj = {
    name: 'why',
    age: 19,
    height: 1.99
}

// 对象的解构：{}

// var { name, age, height } = obj
// console.log(name, age, height);// why 19 1.99

// 跟顺序无关，跟key值有关
var { age, name, height } = obj
console.log(name, age, height);// why 19 1.99

var { age } = obj
console.log(age);//19

var { name: newName } = obj
console.log(obj);//{ name: 'why', age: 19, height: 1.99 }
console.log(newName);//why


var { address: newAddress = "上海市" } = obj
console.log(newAddress);//上海市

