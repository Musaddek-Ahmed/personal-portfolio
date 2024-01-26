// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

function navAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".bounds", {
        y:'0',
        opacity: 1,
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut
    })
    .from("#rightHead", {
        x:'50',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
    .to(".bounds2", {
        y:'0',
        opacity: 1,
        duration: 1.5,
        delay: 0,
        ease: Expo.easeInOut
    })
    .from("#heroFooter", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

navAnim();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;
    
    elem.addEventListener("mouseleave", function (dets){
        
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            
        })
    })

    elem.addEventListener("mousemove", function (dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot * 0.2),
        })
    })
})
