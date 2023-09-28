gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document.querySelector("#main").addEventListener("mousemove",function(dets){
  document.querySelector("#cursor").style.left = dets.x+"px"
  document.querySelector("#cursor").style.top = dets.y+"px"
})
document.querySelector("#box1").addEventListener("mouseenter", function(dets){
  document.querySelector("#cursor").style.opacity = "1"
  document.querySelector("#box1").style.scale = 0.95
})
document.querySelector("#box1").addEventListener("mouseleave", function(dets){
  document.querySelector("#cursor").style.opacity = "0"
  document.querySelector("#box1").style.scale = "1"
})
document.querySelector("#box2").addEventListener("mouseenter", function(dets){
  document.querySelector("#cursor").style.opacity = "1"
  document.querySelector("#box2").style.scale = 0.95
})
document.querySelector("#box2").addEventListener("mouseleave", function(dets){
  document.querySelector("#cursor").style.opacity = "0"
  document.querySelector("#box2").style.scale = "1"
})
document.querySelector("#box3").addEventListener("mouseenter", function(dets){
  document.querySelector("#cursor").style.opacity = "1"
  document.querySelector("#box3").style.scale = 0.95
})
document.querySelector("#box3").addEventListener("mouseleave", function(dets){
  document.querySelector("#cursor").style.opacity = "0"
  document.querySelector("#box3").style.scale = "1"
}) 
document.querySelector("#box4").addEventListener("mouseenter", function(dets){
  document.querySelector("#cursor").style.opacity = "1"
  document.querySelector("#box4").style.scale = 0.95
})
document.querySelector("#box4").addEventListener("mouseleave", function(dets){
  document.querySelector("#cursor").style.opacity = "0"
  document.querySelector("#box4").style.scale = "1"
})
document.querySelector("#box5").addEventListener("mouseenter", function(dets){
  document.querySelector("#cursor").style.opacity = "1"
  document.querySelector("#box5").style.scale = 0.95
})
document.querySelector("#box5").addEventListener("mouseleave", function(dets){
  document.querySelector("#cursor").style.opacity = "0"
  document.querySelector("#box5").style.scale = "1"
})




document.querySelector("#border").addEventListener("mouseenter",function(){
  document.querySelector("#border").style.rotate = "-15deg"
  document.querySelector("#border").style.height = "23vh"
  document.querySelector("#border").style.width = "110%"

})
document.querySelector("#border").addEventListener("mouseleave",function(){
  document.querySelector("#border").style.rotate = "0deg"
  document.querySelector("#border").style.height = "17vh"
  document.querySelector("#border").style.width = "100%"

})

var tl = gsap.timeline()
 
function time(){
  var a = 0
       setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        console.log(a)
        if(a<100){
          document.querySelector("#loader h1").innerHTML = a + "%"
        }else{
          a=100
          document.querySelector("#loader h1").innerHTML = a + "%"

        }
       
       },150);
       
}


tl.to("#loader h1",{
  delay:0.5,
  duration:1.2,
  onStart:time()
})

tl.to("#loader",{
  top:"-100%",
  delay:.3,
  duration:1
})
tl.from("#page1 h1",{
  y:100,
  duration:1,
  
  opacity:0
})


gsap.to("#page1-vid",{
  width:"100%",
  scrollTrigger:{
    trigger:"#page1-vid",
   scroller:"#main",
  //  markers:true,
   start:"top 100%",
   end:"top 0%",
   scrub:3,
   
   
   


  }
})

gsap.from("#page2 h1 , #text",{
  y:100,
  duration:2,
  stagger:.8,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top -80%",
    scrub:2
  }
 
 
})


gsap.to("#page4 h1",{
   transform:"translateX(-100%)",
  duration:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    
    // markers:true,
    start:"top 0%",
    end:"top -200%",
    
    pin:true,
    scrub:3
  }
})

gsap.from("#page7 h1",{
  y:70,
  duration:2,
  stagger:.8,
  opacity:0,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 83%",
    end:"top 15%",
    scrub:2
  }
 
 
})
