// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

document.querySelectorAll('#anterior').forEach(function(el) {
   el.addEventListener('click', function(e) {
   		arrayImg = document.querySelector('#slide').src.split('/');
   		strUltimaImg = arrayImg[arrayImg.length-1];

   		for (var i = 0 ; i < todasAsImagens.length; i++) {
   			if(todasAsImagens[i] == strUltimaImg){
   				anterior = i-1;
   				if(anterior == -1) {
   					strUltimaImg = todasAsImagens[todasAsImagens.length-1];
   				} else {
		   			strUltimaImg = todasAsImagens[anterior];
	   			}
   			}
   		}

		arrayImg = document.querySelector('#slide').src = servidorDasImagens + strUltimaImg;   		
  });
});

document.querySelectorAll('#proximo').forEach(function(el) {
   el.addEventListener('click', function(e) {
   		arrayImg = document.querySelector('#slide').src.split('/');
   		strUltimaImg = arrayImg[arrayImg.length-1];

   		for (var i = 0 ; i < todasAsImagens.length; i++) {
   			if(todasAsImagens[i] == strUltimaImg){
   				proximo = i+1;
   				if(proximo % todasAsImagens.length == 0) {
   					strUltimaImg = todasAsImagens[0];
   				} else {
		   			strUltimaImg = todasAsImagens[proximo];
	   			}
	   			break;
   			}
   		}

		arrayImg = document.querySelector('#slide').src = servidorDasImagens + strUltimaImg;   		
  });
});