const obj = {
    name: 'why',
    age: 18
}

// Object.defineProperty(obj, "name", {
//     set: function () {
//         console.log('监听到obj对象的name属性被访问了');
//     },
//     get: function () {
//         console.log('监听到obj对象的name属性被访问了');
//     }
// })

Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
        get: function () {
            console.log(`监听到obj对象的${key}属性被访问了`);
            return value
        },
        set: function (newValue) {
            console.log(`监听到obj对象的${key}属性被修改了`);
            value = newValue
        }
    })
})


console.log(obj.name);
obj.name = 'codewhy'
obj.age = 30
console.log(obj.age);
