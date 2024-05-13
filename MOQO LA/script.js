var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        // a += Math.floor(Math.random()*20)    // short way to write the above line
        if(a<100){
            document.querySelector("#loader h1").
            innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").
            innerHTML = a+"%"
        }
    },150)
}
// time()


tl.to("#loader h1", {
    scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader", {
    top:"-100vh",
    delay:0.3,
    duration:1.5,
})





gsap.to("#page1 h1", {
    transform:"translateX(-120%)",
    fontWeight:"100",
    
    scrollTrigger:{
        trigger: "#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:3,
        // duration:1,
        pin:true
    }
})