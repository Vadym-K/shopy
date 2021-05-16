$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".wrap_nav");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	$(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('ul.nav, .btn_menu').length) {
			if($(".wrap_nav").hasClass('open')) {
				$(".wrap_nav").removeClass('open');
			}
		}
	});
	$(".carousel_slick").slick({
		infinite: true,
		dots: true,
		autoplay: true,
		vertical: true,
		arrows: false,
		initialSlide: 1
	});
	$('.sel_input').iCheck({
 		checkboxClass: 'icheckbox',
 		increaseArea: '20%'
	});
	$('.slider_product').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider_product',
		focusOnSelect: true
	});
});
 $(function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 1200,
	      values: [ 200, 1000 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.values[ 0 ] );
	        $( "#amount_1" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input#amount").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input#amount").val(value1);
		  	}
		  	$("#slider-range").slider("values",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_1").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_1").val(value2);
		  	}
		  	$("#slider-range").slider("values",1,value2);
		  });

		  // фильтрация ввода в поля
			jQuery('#amount, #amount_1').keypress(function(event){
				var key, keyChar;
				if(!event) var event = window.event;
				
				if (event.keyCode) key = event.keyCode;
				else if(event.which) key = event.which;
			
				if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
				keyChar=String.fromCharCode(key);
				
				if(!/\d/.test(keyChar))	return false;
			
			});

	  });
 $( function(){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1200,
      values: [ 200, 1000 ],
      slide: function( event, ui ) {
        $( "#amount_3" ).val( "$" + ui.values[ 0 ] );
        $( "#amount_4" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount_3" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_4" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
});
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function increment() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function decrement() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();
inputNumber($('.input-number'));