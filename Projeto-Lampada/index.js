var lamp = window.document.getElementById("lampada")

function estaQuebrada () {
    return lamp.src.indexOf('quebrada') > -1
}

function ligar () {
    if (!estaQuebrada()) {
        lamp.src = "imagens/ligada.png"
    }
}

function desligar () {
    if (!estaQuebrada()) {
        lamp.src = "imagens/desligada.png"
    }
}

lamp.addEventListener('click', quebra)
function quebra () {
    lamp.src = "imagens/quebrada.png"
}