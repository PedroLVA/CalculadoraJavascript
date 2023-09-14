
let visor = document.getElementById('visor');
let resposta = false;
var icon = document.getElementById('icon');



//Funções



//light and darkmode

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src ="SunIcon.png"
    }
    else{
        icon.src ="MoonIcon.png"
    }
}

//calculadora
function insert(numero) {

    let textVisor = visor.innerHTML;
    if (textVisor === "0" || resposta) {
        visor.innerHTML = "";
        visor.innerHTML += numero;
        resposta = false;
    }
    else {
        visor.innerHTML += numero;
        resposta = false;
    }
}

function apagaVisor() {
    resposta = false;
    visor.innerHTML = "0";
}

function calcular() {
    if (visor) {
        let resultado = eval(visor.innerHTML);
        resultado = parseFloat(resultado.toFixed(10));
        resposta = true;
        document.getElementById('visor').innerHTML = resultado;
    }
}