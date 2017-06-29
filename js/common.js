$(document).ready(function() {
	//Форма отпрвки почты
	$("input, select, textarea").jqBootstrapValidation();
	//Медленный скрол от секции к секции
	$(".top_mnu a").mPageScroll2id();
	//Анимация подзаголовков №1
	$(".section_header").animated("flipInX", "flipOutX");
	//Увеличение изображения(popup)
	$(".popup").magnificPopup({type:"image"});
	//Увеличение изображение в порфолио
	$(".popup_content").magnificPopup({type:"inline", midClick:true});
	//Появление блоков слева и справа и по-центру
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	//Анимация логотипа
	$(".animation_4").animated("fadeIn", "fadeOut");

	//Анимация подзаголовков №2
	//$(".section_header h2").animated("fadeInLeftBig","fadeOutRightBig");
	//Анимация текста-пояснения подзаголовков
	//$(".section_header .s_descr").animated("fadeInRightBig","fadeOutLeftBig");

	//Анимация в графе Резюме
	$(".left .resume_item").animated("fadeInLeftBig", "fadeOutLeftBig");
	$(".right .resume_item").animated("fadeInRightBig", "fadeOutRightBig");
	//Анимация в портфолио.
	//Блоки в портфолио
	$("#portfolio_grid").mixItUp();
	//Акцент на надписи
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active")
		$(this).addClass("active")
	});
	//Фоновый цвет занимает всё окно
	function heightDetect(){
	$(".main_head").css("height", $(window).height());
	};
	heightDetect()
	$(window).resize(function(){
		heightDetect()
	});
//Анимация верхней кнопки меню
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});
//Верхнее выпадающее меню(top_mnu)
	$(".toggle_mnu").click(function(){
		if ($(".top_mnu").is(":visible")){
			$(".top_mnu").fadeOut(600);
			$(".top_text").removeClass("h_opacify");
	} else {
			$(".top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);	
		};
	});
//При нажатии на ссылку меню закрывается
	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".top_text").removeClass("h_opacify");
		$(".sandwich").toggleClass("active");
	});
//Цикл для ID в партфолио
	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href","#work_" + i);
		$(this).find(".port_descr").attr("id","work_" + i);
	});
});
//плавная загрузка страницы(Preload)
$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

//Анимация имени:фамилия
	$(".top_text h1").animated("fadeInDownBig","fadeInUpBig");
//Анимация имени:фамилия
	$(".top_text p").animated("flipInX","flipOutX");
});