
// Traer los elementos del dom
	var $area=$('#area');//Trae lo que introduce el usuario $area.val()

	var $button=$('#button');
	var $enter=$('#enter');//Trae donde el usuario debe ver previamente su información
	var $large=$('#large');//Trae lo que introduce el usuario $area.val()
	var $small=$('#small');//Trae lo que introduce el usuario $area.val()
	var $medium=$('#medium');//Trae lo que introduce el usuario $area.val()
	var $color=$('#color');

	// Cuando se da click en el botón que imprima lo que el usuario trae
	$area.on("keyup", function (){
	  $enter.text($area.val());
	  // console.log($area.val());
	});


	// Cuando den click en algún evento lo cambia
	    $large.on("click", function (){
	      $valor=$area.val();
	    $enter.attr("class","large");
	    $enter.append($valor);

	  });
	  $medium.on("click", function (){
	    $valor=$area.val();
	  $enter.attr("class","medium");
	  $enter.append($valor);

	});

	  $small.on("click", function (){
	    $valor=$area.val();
	  $enter.attr("class","small");
	  $enter.append($valor);

	});

	// Color
	$color.on("click", function (){
	  $valor=$area.val();
	$enter.attr("class","color");
	$enter.append($valor);

	});
