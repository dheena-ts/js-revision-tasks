function debounce(func, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, delay)
    }
}


function throttle(func, limit) {
    let waiting = false
    return function () {
        if (!waiting) {
            func()
            waiting = true
            setTimeout(() => {
                waiting = false
            }, limit)
        }
    }
}


const debounceScroll = debounce(function () {
    console.log("Debounce Scroll Position:", window.scrollY + "px")
}, 500)


const throttleScroll = throttle(function () {
    console.log("Throttle Scroll Position:", window.scrollY + "px")
}, 500)

window.addEventListener("scroll", function () {
    debounceScroll()
    throttleScroll()
})
