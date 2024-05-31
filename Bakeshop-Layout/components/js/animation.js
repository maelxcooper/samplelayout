// Gsap Scrolltrigger
gsap.registerPlugin(ScrollTrigger);

function initializeheaderAnimation() {
    gsap.from('header', {
        opacity: 0,
        delay: 1,
        y:-20
    })
}


function initializebannerAnimation() {

        gsap.from('.bg-wheat', {
            opacity: 0,
            delay: 2,
            x: 400
        })


        gsap.from('.main_logo img',{
                opacity: 0,
                scale: 0.5,
                delay: 1.5,
                duration: 0.5,
                ease: 'back.out(1.7)'
        })

        gsap.from('.bnr_slider', {
            opacity: 0,
            delay: 1.8,
            x: -20
        })

        gsap.from('.bnr_con h2', {
            opacity: 0,
            delay: 1.8,
            x: 10
        })

        gsap.from('.bnr_if P', {
            opacity: 0,
            delay: 2,
            x: 10
        })

        gsap.from('.f-m-btn', {
            opacity: 0,
            delay: 2.5,
            x: 10
        })

        gsap.from('.bnr_contact > div', {
            opacity: 0,
            delay: 3,
            x: 10
        })


}


function initializedservicesAnimation() {

    gsap.from("#services-container h2", {
        scrollTrigger: "#services-container", 
        opacity: 0,
        scale: 0.5,
        delay: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
    })

    gsap.from(".serv1", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 1.5,
        duration: 1,
        y: -20
    })



    gsap.from(".serv2", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 2,
        duration: 1.5,
        y: -20
    })

    gsap.from(".serv3", {
        scrollTrigger: "#services-container",
        opacity: 0,
        delay: 2.5,
        duration: 2,
        y: -20
    })



}

function initializedwelcomeAnimation() {

    gsap.from('.mid-bg-wheat', {
        scrollTrigger: '#welcome-container',
        opacity: 0,
        delay: 1,
        x: -400
    })

    gsap.from("#welcome-container h2", {
        scrollTrigger: "#welcome-container", 
        opacity: 0,
        scale: 0.5,
        delay: 2,
        duration: 0.5,
        ease: 'back.out(1.7)'
    })

    gsap.from('.info1', {
        scrollTrigger: '.info-grid',
        opacity: 0,
        delay: 2,
        x: -20
    })

    gsap.from('.info2', {
        scrollTrigger: '.info-grid',
        opacity: 0,
        delay: 2,
        x: 20
    })

    gsap.from('.opt1 div:first-child', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 2,
        x: -20
    })

    gsap.from('.opt1 div:nth-child(2)', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 2.5,
        x: -20
    })

    gsap.from(".br-img-con", {
        scrollTrigger: ".serv-options", 
        opacity: 0,
        scale: 0.5,
        delay: 3,
        duration: 1,
        ease: 'back.out(1.7)',
        y: -100
    })

    gsap.from('.opt2 div:first-child', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 3,
        x: 20
    })

    gsap.from('.opt2 div:nth-child(2)', {
        scrollTrigger: '.serv-options',
        opacity: 0,
        delay: 3.5,
        x: 20
    })

}