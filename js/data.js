var commentsContainer = document.getElementById("pastCommit");//Contenedor de comentarios pasados
var sendBtn = document.getElementById("button");//Botón de enviar comentarios

// Agregando DATA
// Para este problema es necesario generar DATA por  la
// escalabilidad (FIREBASE)

var commentsData= [//Genero un arreglo de objetos
	{
		content:"hola",
		style: {
			color:"green",
			background:"purple",
			textAlign: "left",
      fontSize: "36px",
		}
	},
	{
		content:"adios",
		style: {
			color:"blue",
			background:"yellow",
			textAlign: "center",
      fontSize: "10px",
		}
	},
	{
		content: "hola",
		style: {}
	}

];





function drawComments(){//Función para pintar los comentarios
	commentsContainer.innerHTML = "";//Limpia el contenedor
	for (var i=0; i<commentsData.length;i++){ //Recorre el arreglo del DATA
		var sectionDOM=createDomCommentFromData(commentsData[i]);//Se crea el arreglo para dom
		var commentsContainer=document.getElementById('pastCommit');//Trae al contenedor de los comentarios de HTML
		commentsContainer.appendChild(sectionDOM);//Se agregan los comentarios al html
	}
}



function createCommentsFromData (data) {
	var commentContent=data.content;//Trae el valor del comentario, que se encuentra en la key "content"
	var commentDom=document.createElement('section');//Se crea un elemento que es del tag 'section'
	commentDom.innerHTML=commentContent;
	commentDom.className='comment';
	return commentDom;
}

drawComments();

$button.addEventListener("click",addComment);

function addComment(){
	var newComentText=$enter.innerHTML //Se usa innerHTML por que no es un inpot, en este caso se usaría .value
	var newComment={//Creo un nuevo objeto que es el que contendrá los nuevos Comentarios
		content: null,//Declaro que el objeto tiene una key vacía
		style:{}//Creo el objeto vacío
		newComment.content=newCommentText;//Agrego el nuevo comentario al nuevo onjeto
		newComment.style.color=$enter.style.color;//Agrego el estilo del nuevo comentario al estilo del nuevo objeto
		console.log(newComment);
	};

}
