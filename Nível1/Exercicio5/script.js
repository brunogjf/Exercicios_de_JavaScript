alert('Seja bem vindo(a) ao meu site!');

function clique(){
    num = prompt('Insira um número:' );
    dobro = num*2;
    metadde = num/2; 
    document.getElementById('resultado').innerHTML= 'O dobro de ' + ' '+  num + ' ' +'é' + ' '+ dobro + ' ' + 'e a metade é' + ' ' + metadde + '!'; 
}; 