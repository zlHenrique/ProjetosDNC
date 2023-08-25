const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "17 oct 2023"

function countDown(){
    const dataLancamento = new Date(lancamento)
    const dataAtual = new Date()
    const totalSegundos = (dataLancamento - dataAtual)/1000;
    const finalDias = Math.floor(totalSegundos / 60 / 60 / 24)
    const finalHoras = Math.floor(totalSegundos / 60 / 60) % 24
    const finalMinutos = Math.floor(totalSegundos / 60) % 60
    const finalSegundos = Math.floor(totalSegundos) % 60

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)