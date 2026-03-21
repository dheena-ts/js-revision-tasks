document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll("img.lazyLoad");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target

                image.src = image.dataset.src
                image.classList.remove("lazyLoad")
                observer.unobserve(image)
            }
        })
    }, {threshold: 1.0,root:null,rootMargin:'0px'})
    lazyImages.forEach(image => {
        imageObserver.observe(image)
    });

});