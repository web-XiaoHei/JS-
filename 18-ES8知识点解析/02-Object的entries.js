// 通过Object.entries可以获取到一个数组，数组中会存放可枚举属性的键值对数组
const obj = {
    name: 'why',
    age: 18
}

console.log(Object.entries(obj));// [ [ 'name', 'why' ], [ 'age', 18 ] ]
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
    console.log(item[0], item[1]);
})


console.log(Object.entries(["abc", 'cba', 'nba']));
// [ [ '0', 'abc' ], [ '1', 'cba' ], [ '2', 'nba' ] ]

console.log(Object.entries('abc'));// [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]