// 1.javascript 中对象是不能作为对象的key的
const obj1 = { name: 'why' }
const obj2 = { name: "kobe" }

const info = {
    [obj1]: 'aaa',
    [obj2]: 'bbb'
}

// console.log(info);// { '[object Object]': 'bbb' }

// 2.Map就是允许我们对象类型来作为key的
const map = new Map()
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
map.set(1, 'aaa')
// console.log(map);
// Map(3) {
//     { name: 'why' } => 'aaa',
//     { name: 'kobe' } => 'bbb',
//     1 => 'aaa'
//   }

const map2 = new Map([[obj1, 'aaa'], [obj2, 'bbb']])
// console.log(map2); // Map(2) { { name: 'why' } => 'aaa', { name: 'kobe' } => 'bbb' }

// 3.Map常用的方法
// console.log(map.size);


// set
map2.set("why", 'eee')

// get
map2.get('why')

// has
map2.has('why')

// delete(key)
map2.delete('why')

// clear
// map.clear()

// 4.遍历map
// map2.forEach((item, key) => {
//     // console.log(item, key);
// })

// for (const item of map2) {
//     console.log(item[0], item[1]);
// }
for (const [key, value] of map2) {
    console.log(key, value);
}