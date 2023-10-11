function requestData(url) {
    // 异步请求的代码会被放入到executor中
    return new Promise((reslove, reject) => {
        // 模拟网络请求的结果
        setTimeout(() => {
            // 拿到请求的结果
            // url传入的是coderwhy，请求成功
            if (url == 'coderwhy') {
                // 成功
                let names = ["abc", "cba", "nba"]
                reslove(names)
            } else {
                let errMessage = '请求失败,url错误'
                reject(errMessage)
            }
        }, 3000)
    })
}

const promsie = requestData('coderwhy')

promsie.then((res) => {
    console.log(`请求成功:${res}`);
}, (err) => {
    console.log(`请求失败:${err}`);
})

