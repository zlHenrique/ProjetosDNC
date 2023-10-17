let cardQuinta = document.getElementById('qui')
let cardSexta = document.getElementById('sex')
let cardSabado = document.getElementById('sab')
let cardDomingo = document.getElementById('dom')
let listaCards = [cardQuinta, cardSexta, cardSabado, cardDomingo]

function highlightCard(selector) {
    let element = document.querySelector(selector);
    element.classList.toggle('card-highlight');
}

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) => {
        var code = event.code

        if (code === 'Digit1') {
            cardQuinta.classList.toggle('card-highlight')
            cardSexta.classList.remove('card-highlight')
            cardSabado.classList.remove('card-highlight')
            cardDomingo.classList.remove('card-highlight')
        }

        if (code === 'Digit2') {
            cardQuinta.classList.remove('card-highlight')
            cardSexta.classList.toggle('card-highlight')
            cardSabado.classList.remove('card-highlight')
            cardDomingo.classList.remove('card-highlight')
        }

        if (code === 'Digit3') {
            cardQuinta.classList.remove('card-highlight')
            cardSexta.classList.remove('card-highlight')
            cardSabado.classList.toggle('card-highlight')
            cardDomingo.classList.remove('card-highlight')
        }

        if (code === 'Digit4') {
            cardQuinta.classList.remove('card-highlight')
            cardSexta.classList.remove('card-highlight')
            cardSabado.classList.remove('card-highlight')
            cardDomingo.classList.toggle('card-highlight')
        }
    })
}

addKeyboardEventListeners()