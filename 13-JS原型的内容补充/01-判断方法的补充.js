var obj = {
    name: 'why',
    age: 18
}

var info = Object.create(obj, {
    address: {
        value: '北京市',
        enumerable: true
    }
})

// console.log(info);//  { address: '北京市' }
// console.log(info.__proto__);//  { name: 'why', age: 18 }
//
// 判断属性是否在对象本身上，而不是原型对象上
// console.log(info.hasOwnProperty("address"));//true
// console.log(info.hasOwnProperty("name"));//false

// in操作符：不管在当前对象还是原型中返回的都是true
// console.log("address" in info);//true
// console.log("address" in info.__proto__);//false
// console.log("name" in info);//true


