var tl = gsap.timeline();


tl.to("#bottle",{
    scrollTrigger : {
        trigger:"#bottle",
        start:"top 15%",
        end:"bottom 85%",
        scrub:2,
        // markers:true
        // pin:true
    },
    x:"-20%",
    y:"-45%",
    rotate:"-15deg",
    duration:2,
    ease:"Exop.easeInOut"
})


tl.to("#bottle",{
    scrollTrigger : {
        trigger:"#page5",
        start:"top 60%",
        end:"bottom 60%",
        scrub:2,
        // markers:true
        // pin:true
    },
    scale:0.48,
    duration:2,
    ease:"Exop.easeInOut"
})
tl.to("#bottle",{
    scrollTrigger : {
        trigger:"#page5",
        start:"bottom 96%",
        end:"bottom 96%",
        scrub:2,
        // pin:true
        // markers:true
    },
    opacity:0,
    // ease:Exop.easeInOut
})
gsap.to("#chhoti_bottle",{
    scrollTrigger:{
        trigger:"#page5",
        start:"bottom 96%",
        end:"bottom 96%",
        scrub:2,
    },
    opacity:1,
    // ease:Expo.easeInOut
})