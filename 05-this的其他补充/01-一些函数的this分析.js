// 1.setTimeot
function zkSetTimeout(fn, duration) {
    setTimeout(fn, duration)
}
function foo() {
    console.log(this);
}
zkSetTimeout(foo, 2000) //window

// 2.监听点击
// const boxDiv = document.querySelector('.box')
// console.log(boxDiv, "boxDiv");
// boxDiv.onclick = function () {
//     console.log(this);
// }

// 3.数组.forEach/map/filter/find
var names = ['abc', 'cba', 'bac']
names.forEach(function (item) {
    console.log(this, "数组方法");
}, "abc")
// window

// 很多函数中存在thisArg这样的参数，可以指定this的指向