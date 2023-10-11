const names = ["abc", "cba", "nba"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 内部有++的操作，for中不能用const
// {
//     var i = 0
//     console.log(names[i]);
// }

// {
//     var i = 0
//     // let i = 0
//     console.log(names[i]);
// }

// ES6中 for....of遍历数组
for (const item of names) {
    //内部没有++操作，可以使用const
    console.log(item);
}