// 1.ES6之前,对象的属性名(key)
// var obj = {
//     name: 'why',
//     friend: { name: 'coderwhy' },
//     age: 18
// }

// obj['newName'] = 'james'
// console.log(obj);

// 2.ES6中symbol的使用
const s1 = Symbol()
const s2 = Symbol()
// console.log(s1 == s2);//false

// ES10中，Symbol还有一个描述（description）
const s3 = Symbol('aaa')
// console.log(s3.description);//aaa


//  3.Symbol值作为key
//  3.1在定义对象字面量时使用
const obj = {
    [s1]: 'abc',
    [s2]: 'abc'
}

// 3.2新增属性
obj[s3] = "nba"

// 3.3. Object.defineProperty
const s4 = Symbol()
Object.defineProperty(obj, s4, {
    enumerable: true,
    configurable: true,
    value: 'mba',
    writable: true
})

// console.log(obj[s1]);// abc
// 注意：不能通过点语法获取
// console.log(obj.s1);// undefined


// 4.使用Symbol作为key的属性名，在遍历/Object.keys等中是获取不到Symbol值
// 需要通过Object.getOwnPropertySymbols来获取所有的Symbol的key
// console.log(Object.keys(obj));// []
// console.log(Object.getOwnPropertyNames(obj));// []
// console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(), Symbol(), Symbol(aaa), Symbol() ]

for (const sKey of Object.getOwnPropertySymbols(obj)) {
    console.log(obj[sKey]);
}

// 5.Symbol.for(key)
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')

console.log(sa == sb); // true

const key = Symbol.keyFor(sa)
console.log(key);// aaa



