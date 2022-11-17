// 1.创建Set解构
const set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(20)

// 2.添加对象的时候要注意
set.add({})
set.add({})

const obj = {}
set.add(obj)
set.add(obj)

// console.log(set);// Set(6) { 10, 20, 30, {}, {}, {} }

// 3.对数组去重
const arr = [33, 10, 26, 30, 33, 26]
// const newArr = []

// for (const item of arr) {
//     if (newArr.indexOf(item) == -1) {
//         newArr.push(item)
//     }
// }

// console.log(newArr, 'newArr');

const arrSet = new Set(arr)
// console.log(arrSet);// Set(4) { 33, 10, 26, 30 }
// console.log(Array.from(arrSet));// [ 33, 10, 26, 30 ]
// console.log([...arrSet]);// [ 33, 10, 26, 30 ]


// 4.size属性
console.log(arrSet.size);// 4

// 5.set的方法
arrSet.add(100)
arrSet.delete(33)
arrSet.has(100)
arrSet.clear()

// 6.对set进行遍历
arrSet.forEach(item => { })
for (const item of arrSet) {

}