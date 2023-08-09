var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var cardBruna = window.document.getElementById("bruna")
var cardLeonardo = window.document.getElementById("leonardo")
var cardSamantha = window.document.getElementById("samantha")

function RolarParaDireita(){
    cardBruna.style = "display: none"
    cardSamantha.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex"
}

function RolarParaEsquerda(){
    cardSamantha.style = "display: none"
    cardBruna.style = "display: flex"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}