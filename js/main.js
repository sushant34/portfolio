$(window).scroll(function(){
	if($(this).scrollTop()>100)
	{
		$(".navbar").addClass("fix")
	}
	else{

		$(".navbar").removeClass("fix")
	}

})

$('body').scrollspy({ target: '#navbar-example' })

$('.client-item').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
