function tabuada(){
    var num = window.document.getElementById('num')
    var end = window.document.getElementById('end')
    num = Number(num.value)
    end = Number(end.value)
    var resposta = window.document.getElementById('resposta')
    resposta.innerHTML = `A tabuada do ${num} é:`
    for (let i = 0; i <= end; i++) {
        if (num == 0 && end == 0 || end == 0) {
            window.alert('Preencha os valores para prosseguir.')
            break
        }
        let res = num * i;
        resposta.innerHTML += `<br>${num} * ${i} = ${res}`
    }
}
