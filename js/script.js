let contador = document.querySelector('.contador');
let retirar = document.querySelector('#btnRetirar');
let zerar = document.querySelector('#btnZerar');
let acrescentar = document.querySelector('#btnAcrescentar');
let cont = 0;


// Função para zerar o contador / Function to reset the counter
function zerarContador(){
    cont = 0;
    return contador.innerHTML = cont;


}
// Função para acrescentar 1 ao contador / 
function acrescentarContador(){
  contador.innerHTML = cont++;;
  
}

// Função para retirar 1 do contador / 
function retirarContador(){
    contador.innerHTML = cont--;;
    
  }

retirar.addEventListener('click',function(event){
   retirarContador();
});

zerar.addEventListener('click',function(event){
  zerarContador();
});

acrescentar.addEventListener('click',function(event){
   acrescentarContador();
});