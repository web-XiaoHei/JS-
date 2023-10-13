function debounce(fn, delay, immdediate = true) {
    // 1.定义一个定时器，保存上一次的定时器
    let timer = null
    let isInvoke = false // immdediate是否
    const _debounce = function (...args) {
        // 取消上一次的定时器
        if (timer) clearTimeout(timer)

        // 判断是否需要立即执行
        if (immdediate && !isInvoke) {
            fn.apply(this, args)
            // immdediate = false
            isInvoke = true
        } else {
            timer = setTimeout(() => {
                // 真正执行的函数
                fn.apply(this, args)

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