function throttle(fn, interval, options = { leading: true, trailing: false }) {
    const { leading, trailing } = options
    // 1.记录上一次的开始时间
    let lastTime = 0
    let timer = null
    // 2.事件触发时，真正执行的函数
    const _throttle = function (...args) {
        // 2.1 获取当前事件触发时的时间
        const nowTime = new Date().getTime()
        // 首次是否触发
        if (!lastTime && !leading) lastTime = nowTime
        // 2.2 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩多长时间去需要去触发函数
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            if (timer) clearTimeout(timer)
            timer = null
            // 2.3正在触发函数
            fn.apply(this, args)
            // 2.4保留上次触发的时间
            lastTime = nowTime
            return
        }

        if (trailing && !timer) {
            timer = setTimeout(() => {
                timer = null
                lastTime = !leading ? 0 : new Date().getTime()
                fn.apply(this, args)
            }, remainTime)
        }
    }

    _throttle.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        lastTime = 0
    }

    return _throttle
}