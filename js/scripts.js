// page nav hover
	$('.page-nav .next a').mouseenter(function () {
		$('.next .icon').addClass("next-hover");
		$(this).mouseleave(function(){
			$('.next .icon').removeClass("next-hover");
		});
	});
	$('.page-nav .previous a').mouseenter(function () {
		$('.previous .icon').addClass("previous-hover");
		$(this).mouseleave(function(){
			$('.previous .icon').removeClass("previous-hover");
		});
	});