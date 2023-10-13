function debounce(fn, delay, immdediate = true, resultCallback) {
    // 1.定义一个定时器，保存上一次的定时器
    let timer = null
    let isInvoke = false // immdediate是否
    const _debounce = function (...args) {
        // 取消上一次的定时器
        if (timer) clearTimeout(timer)

        // 判断是否需要立即执行
        if (immdediate && !isInvoke) {
            const result = fn.apply(this, args)
            if (resultCallback) resultCallback(result)

            // immdediate = false
            isInvoke = true
        } else {
            timer = setTimeout(() => {
                // 真正执行的函数
                const result = fn.apply(this, args)
                if (resultCallback) resultCallback(result)
                isInvoke = false
            }, delay)
        }

    }

    // 封装取消功能
    _debounce.cancel = function () {
        console.log('111');
        if (timer) clearTimeout(timer)
        timer = null
        isInvoke = false
    }

    return _debounce
}