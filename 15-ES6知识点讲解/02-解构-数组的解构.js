var names = ["abc", "cba", "nba"]
// var Item1 = names[0]
// var Item1 = names[1]
// var Item1 = names[2]

// 对数组的解构
var [item1, item2, item3] = names
console.log(item1, item2, item3);//abc cba nba

// 解构后面的元素
var [, , itemz] = names
console.log(itemz);//nba

// 解构出一个元素，后面的元素放到一个新数组中

var [itemx, ...newNames] = names
console.log(itemx, newNames);//abc [ 'cba', 'nba' ]

// 解构的默认值
var [itema, itemb, itemc, itemd = "aaa"] = names
console.log(itema, itemb, itemc, itemd);//abc cba nba aaa
