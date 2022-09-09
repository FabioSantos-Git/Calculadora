
function teclado(num){   //PEGAR VALOR DO TECLADO

var ola = num
var numero = document.getElementById('tela').innerHTML; //TELA

document.getElementById('tela').innerHTML = numero + num ;  //MOSTRAR VALOR NA TELA

if(num === 'AC'){       //LIMPAR TELA
  document.getElementById('tela').innerHTML = '';
}

if(num === '=' && numero){  // FAZ A SOMA DOS VALORES
document.getElementById('tela').innerHTML = eval(numero);
}
    
 console.log(ola)   

}

var resultado = document.getElementById('tela');

resultado.addEventListener('keypress')