// function log(date, type, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
// }

// log(new Date(), "DEBUG", "查找到轮播图的bug")
// log(new Date(), "DEBUG", "查询菜单的bug")
// log(new Date(), "DEBUG", "查找数据的bug")

// 柯里化的优化
var log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}
// 如果我们现在打印的都是当前时间（同一时间）

var nowLog = log(new Date())
nowLog("DEBUG")("查找到轮播图的bug")
nowLog("DEBUG")("新增了添加用户的功能")

var nowAndDebugLog = log(new Date())("DEBUG")
nowAndDebugLog("查找到轮播图的bug")
nowAndDebugLog("新增了添加用户的功能")