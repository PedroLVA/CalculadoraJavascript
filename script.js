
//Funções
function insert(numero){
    let textVisor = document.getElementById('visor').innerHTML;
    if(textVisor === "0"){
        document.getElementById('visor').innerHTML = "";
        document.getElementById('visor').innerHTML += numero;
    }
    else{
        document.getElementById('visor').innerHTML += numero;
    }
    }
    
function apagaVisor(){
    document.getElementById('visor').innerHTML = "0";
}