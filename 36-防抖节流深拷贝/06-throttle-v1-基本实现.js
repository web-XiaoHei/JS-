function throttle(fn, interval) {
    // 1.记录上一次的开始时间
    const lastTime = 0

    // 2.事件触发时，真正执行的函数
    const _throttle = function () {
        // 2.1 获取当前事件触发时的时间
        const nowTime = new Date().getTime()

        // 2.2 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩多长时间去需要去触发函数
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            // 2.3正在触发函数
            fn()
            // 2.4保留上次触发的时间
            lastTime = nowTime
        }
    }

    return _throttle
}