function throttle(fn, interval, options = { leading: true, trailing: true }) {
    const { leading, trailing } = options
    let lastTime = 0
    let timer = null
    const _throttle = (...args) => {

        let nowTime = new Date().getTime()
        // 首次是否触发
        if (!leading && !lastTime) lastTime = nowTime
        let remainTime = interval - (nowTime - lastTime)

        if (remainTime <= 0) {
            if (timer) clearTimeout(timer)
            fn.apply(this, args)
            lastTime = nowTime
            timer = null
        }
        // 最后一次事件触发但时间未到时间间隔
        if (trailing && !timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
                lastTime = !leading ? 0 : new Date().getTime()
            }, remainTime)
        }
    }

    return _throttle
}