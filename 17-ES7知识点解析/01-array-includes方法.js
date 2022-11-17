const names = ['abc', 'cba', 'nba', 'mba', NaN]

if (names.indexOf("cba") !== -1) {
    console.log("包含cba成本");
}

// ES7 
if (names.includes('cba', 1)) {
    console.log("包含cba成本");
}
// includes(xx,number)
// 第二次参数是从数组的第number+1项开始
// 于indexOf的区别是可以判断NaN

if (names.indexOf(NaN) !== -1) {
    console.log("包含NaN");
} else {
    console.log('111');
}


if (names.includes(NaN)) {
    console.log("包含NaN");
}