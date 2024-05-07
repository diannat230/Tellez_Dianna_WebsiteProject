gsap.registerPlugin(ScrollTrigger)

// About Kasama Animation //
gsap.from('.about-card', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".container",
        ease: "elastic.out(1,0.3)",
        start: "top 80%",
        markers: false,
    }
})

// Food Images Animation //
gsap.from('.food-container', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".food-image-container",
        ease: "elastic.out(1,0.3)",
        start: "top 80%",
        markers: false,
    }
})

