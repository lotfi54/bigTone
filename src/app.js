
var gsap= new TimelineMax(); 

gsap.to('.menu',2,{
    top:"0%", 
    opacity:1,
    ease:Expo.easeInOut, 
    delay:-2
}); 

gsap.reverse(); 

$(document).on("click",".toggle",function(){
    $(".toggle").fadeOut(function () {
        $(".toggle").text(($(".toggle").text() == 'Menu') ? 'Close' : 'Menu').fadeIn();
    })
        gsap.reversed(!gsap.reversed()); 
})
