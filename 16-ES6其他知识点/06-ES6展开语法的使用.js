const names = ['abc', 'bac', 'cba']
const name = 'why'

// 1.函数调用时
function foo(x, y, z) {
    console.log(x, y, z);
}

// foo.apply(null, names)
foo(...names)// abc bac cba
foo(...name)// w h y

// 2.构造数组时
const newNames = [...names, ...name]
console.log(newNames);//[ 'abc', 'bac', 'cba', 'w', 'h', 'y' ]

// 3.ES9 构建对象字面量时
const info = { name: 'why', age: 18 }
const obj = { ...info, address: '广州市' }
const obj1 = { ...info, address: '广州市', ...names }
console.log(obj); // { name: 'why', age: 18, address: '广州市' }
console.log(obj1);

// {
//     '0': 'abc',
//     '1': 'bac',
//     '2': 'cba',
//     name: 'why',
//     age: 18,
//     address: '广州市'
//  }


