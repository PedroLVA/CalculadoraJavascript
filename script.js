
let visor = document.getElementById('visor');
let resposta = false;

//Funções
function insert(numero) {

    let textVisor = visor.innerHTML;
    if (textVisor === "0" || resposta == true) {
        visor.innerHTML = "";
        visor.innerHTML += numero.toLocaleString('en-US');
        resposta = false;
    }
    else {
        visor.innerHTML += numero.toLocaleString('en-US');
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
        document.getElementById('visor').innerHTML = resultado.toLocaleString('en-US');
    }
}