
// Traer los elementos del dom
	var $area=$('#area');//Trae lo que introduce el usuario $area.val()
	var $button=$('#button');
	var $enter=$('#enter');//Trae donde el usuario debe ver previamente su información
// Trae los botones del menú
  var $large=$('#large');
	var $small=$('#small');
	var $medium=$('#medium');
	var $color=$('#color');
  var $background=$('#background');
  var $left=$('#left');
  var $center=$('#center');
  var $rigth=$('#rigth');
  var $button=$('#button');//Botón de enviarr
  var arrayText= [];//Arreglo donde se guardarán los datos
  var $pastCommit=$('#pastCommit');//Área doonde se publican los commits pasados
	// Cuando se da click en el botón que imprima lo que el usuario trae
	$area.on("keyup", function (){
	  $enter.text($area.val());
	});
  $button.on("click", function (){ //Función que almacena las entradas
    var space=$("<div />");
    $enter.text($area.val());
	  // console.log($area.val());
    arrayText.push($area.val());
    console.log(arrayText);
    $pastCommit.append(arrayText);

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

	   $color.on("click", function (){
	      $valor=$area.val();
	      $enter.attr("class","color");
	      $enter.append($valor);
	   });

     $background.on("click", function (){
        var backgroundColor= parseInt(prompt("Ingresa el valor en hexadecimal"));
        backgroundColor=("#"+backgroundColor);

	      $valor=$area.val();
        console.log(backgroundColor);
	      $enter.css("color", backgroundColor);
	      $enter.append($valor);
	   });
