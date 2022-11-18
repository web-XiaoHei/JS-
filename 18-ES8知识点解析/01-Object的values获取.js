const obj = {
    name: 'why',
    age: 18
}

console.log(Object.keys(obj));// [ 'name', 'age' ]
console.log(Object.values(obj));// [ 'why', 18 ]

// 用的非常少
Object.values(['abc', 'cba', 'bac'])
Object.values('abc')