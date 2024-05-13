var tl = gsap.timeline({scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
    
}})

tl.to("#top", {
    top:"-50%"

},'a')

tl.to("#bottom", {
    bottom:"-50%"
},'a')

tl.to("#top-h", {
    top:"80%" 
},'a')

tl.to("#bottom-h", {
    bottom:"-80%"
},'a')

tl.to(".content", {
    marginTop:"0%"
},'a')

// var tl = gsap.timeline()

// tl.to("#main", {
//     scrollTrigger:{
//     trigger: "#main",
//     markers: true,
//     start:"50% 50%",
//     end:"100% 50%",
//     scrub:2,
//     pin:true
//     }
// })