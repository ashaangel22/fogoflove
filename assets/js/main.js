$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    //var scene = new ScrollMagic.Scene({
    //  offset: 100, // start scene after scrolling for 100px
    //  duration: 400 // pin the element for 400px of scrolling
    //});

    var header = new ScrollMagic.Scene({
       triggerElement: "#trigger1"
    })
    .setTween("h1", 1, {opacity: 1}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller); 
    
    var intro = new ScrollMagic.Scene({
       triggerElement: "#trigger"
    })
    .setTween("#animate", 0.5, {opacity: 1, scale: 2.5}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var intro2 = new ScrollMagic.Scene({
       triggerElement: "#trigger2"
    })
    .setTween("#animate2", 0.5, {opacity: 1, scale: 2.5}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var intro3 = new ScrollMagic.Scene({
       triggerElement: "#trigger3"
    })
    .setTween("#img", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);

    var design = new ScrollMagic.Scene({
       triggerElement: "#trigger4"
    })
    .setTween(".title", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var design1 = new ScrollMagic.Scene({
       triggerElement: "#trigger5"
    })
    .setTween(".imgLeft", 0.5, {left: 0}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var design2 = new ScrollMagic.Scene({
       triggerElement: "#trigger6"
    })
    .setTween(".imgRight", 1, {right: 0}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var design3 = new ScrollMagic.Scene({
       triggerElement: "#trigger7"
    })
    .setTween(".imgLeft2", 0.5, {left: 0}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var design4 = new ScrollMagic.Scene({
       triggerElement: "#trigger8"
    })
    .setTween(".imgRight2", 0.5, {right: 0}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var design5 = new ScrollMagic.Scene({
       triggerElement: "#trigger9"
    })
    .setTween(".imgLeft3", 0.5, {left: 0}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var game = new ScrollMagic.Scene({
       triggerElement: "#trigger10"
    })
    .setTween(".title2", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var game1 = new ScrollMagic.Scene({
       triggerElement: "#trigger11"
    })
    .setTween(".img1", 0.5, {rotationX: 360}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var game2 = new ScrollMagic.Scene({
       triggerElement: "#trigger12"
    })
    .setTween(".img2", 0.5, {rotationY: 360}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
    var game3 = new ScrollMagic.Scene({
       triggerElement: "#trigger13"
    })
    .setTween(".img3", 0.5, {rotationZ: 360}) // trigger a TweenMax.to tween
     // add indicators (requires plugin)
    .addTo(controller);
    
});