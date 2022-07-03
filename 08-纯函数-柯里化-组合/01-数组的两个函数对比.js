var names = ["abc", "cba", "nba", "dna"]

// slice只要给他传入一个start/end，那么对于同一个数组来说，他会给我们返回确定的值
// slice函数本身不会改变原来的数组
// slice纯函数
var newNames = names.slice(0, 3)

console.log(newNames);
console.log(names);

var newNames2 = names.splice(2, 1)
// splice在执行时，有修改调用的数组对象本身，修改的这个操作就是产生的副作用
console.log(newNames2, names);
