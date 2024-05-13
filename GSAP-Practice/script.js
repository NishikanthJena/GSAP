// gsap.to("#box",{
//     x:700,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.4
// })

// gsap.from("#box", {
//     x:700,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.4
//  })


// gsap.to("h1", {
//     x:500,
//     color:"orange",
//     duration:2,
//     delay:1
//  })

// gsap.to("h2", {
//     x:500,
//     color:"yellow",
//     duration:2,
//     delay:3
// })
// gsap.to("h3", {
//     x:500,
//     color:"salmon",
//     duration:2,
//     delay:5
// })

// gsap.to("h1", {
//     x:500,
//     color:"blue",
//     duration:1,
//     delay:1,
//     stagger:1,
//     repeat:1,
//     yoyo:true
// })


// TimeLine 
var tl = gsap.timeline()

tl.to("h1", {
    x:600,
    duration:1
})
tl.to("h2", {
    x:700,
    duration:2
})
tl.to("h3", {
    x:800,
    duration:3
})


