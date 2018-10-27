$(document.body).ready(function(){

// init
var ctrl = new ScrollMagic.Controller();

var pinit=new ScrollMagic.Scene({
	triggerHook:0 ,
	triggerElement:'body'	
	
}) 
.setPin('.welcome')


.addTo(ctrl);
ctrl.update(true);
ctrl.updateScene(pinit,true)

//First slidein
//Control out
var mainhalf=TweenMax.to('.welcome',10,{
	left:'800px',
	width:'50%',
	visibility:'visible'

});

var mainout=TweenMax.to('.welcome',10,{
	left:'1600px',
	visibility:'visible'
});
//About in
var aboutin=TweenMax.to('#about',10,{
		width:'50%',
		visibility:'hidden'
		
		
});
var aboutfull=TweenMax.to('#about',10,{
	width:'100%',
	visibility:'visible'
});

var aboutbye=TweenMax.to('#about',10,{
	
	
	width:'0%',
	visibility:'visible'
});
var aboutbyebye=TweenMax.to('#about',10,{
	left:'-800px',
	visibility:'hidden'
});

var himain=TweenMax.to('.welcome',10,{
	
	width:'100%',
	visibility:'visible',
	left:'0px',
	height:'768px'

}) ;
 



var enterabout=new TimelineMax()
.add([mainhalf,aboutin])
.add([mainout,aboutfull,aboutfull])
.add([aboutbye,aboutbye,himain])
.add(aboutbyebye)



var scene1=new ScrollMagic.Scene({
	triggerElement:'#about',
	triggerHook:.2,	
	duration:'400%'
	
	
})

.setTween(enterabout)
.setPin('#about')


.addTo(ctrl);
ctrl.update(true);
ctrl.updateScene(scene1,true)
//First Slide


//SecondSlidein
//Control out
var mainhalf=TweenMax.to('.welcome',10,{
	left:'820px',
	width:'50%',
	visibility:'visible'

});

var mainout=TweenMax.to('.welcome',10,{
	left:'1600px',
	visibility:'visible'
});
//Value in
var valuein=TweenMax.to('#values',10,{
		width:'50%',
		visibility:'hidden'
	
});
var valuefull=TweenMax.to('#values',10,{
	width:'100%',
	visibility:'visible'
});

var valuebye=TweenMax.to('#values',10,{
	
	
	width:'0%',
	visibility:'visible'
});
var valuebyebye=TweenMax.to('#values',10,{
	left:'-800px',
	visibility:'hidden',
	
});

var himain=TweenMax.to('.welcome',10,{
	
	width:'100%',
	visibility:'visible',
	left:'0px',
	height:'768px',


}) ;
 



var entervalue=new TimelineMax()
.add([mainhalf,valuein])
.add([mainout,valuefull,valuefull])
.add([valuebye,valuebye,himain])
.add(valuebyebye)

var scene2=new ScrollMagic.Scene({
	triggerElement:'#values',
	triggerHook:.2,	
	duration:'400%'
	
	
})

.setTween(entervalue)
.setPin('#values')


.addTo(ctrl);
ctrl.update(true);
ctrl.updateScene(scene2,true)
//Second Slide in


//Third slide in

//Third slide in

//remove welcome pin
remscene=new ScrollMagic.Scene({
	triggerElement:'#services',
	
})
.setClassToggle('.welcome','fadeOutUp')

.addTo(ctrl);
ctrl.update(true);
ctrl.updateScene(remscene,true)

});