const meuBotao = document.getElementById("comeco");

var array = ['musica1.html','musica2.html','musica3.html','musica4.html','musica5.html'];
var numeroaleatorio = Math.floor(Math.random() * 5);
var count = 0;
meuBotao.addEventListener("click", function() {
    
    window.location.href = array[numeroaleatorio];
    array.splice(numeroaleatorio,1)[0];
    var arraystring = JSON.stringify(array)
    var musicas = "";
    localStorage.setItem('musicas',musicas);
    localStorage.setItem('count',count);
    localStorage.setItem('array',arraystring);
});