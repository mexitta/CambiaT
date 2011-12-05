/**
 * @author Mexa
 */



	function funcion(){
		$("#centro").slideToggle(1000);

		setTimeout('cambia1()',1000)
				
		$("#centro").slideToggle(1000);
		
	}
	
	function cambia1(){
		$("#tres").hide();
		$(".c2").hide();
		$(".c1").show();
	}
	
	function cambia2(){
		$("#tres").hide();
		$(".c1").hide();
		$(".c2").show();
	}
	

	function funcion2(){
		$("#centro").slideToggle(1000);

		setTimeout('cambia2()',1000)
				
		$("#centro").slideToggle(1000);
		
	}

	
	