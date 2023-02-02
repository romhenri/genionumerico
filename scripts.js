var secretNumber = parseInt(Math.random() * 1001)

console.log(secretNumber) 

// Botão de Tentar

function play() {
    console.log('Tentou!')

    var cn = window.document.getElementById('n')
    var chosenNumber = Number(cn.value)

    if (secretNumber == chosenNumber) {
        console.log('Acertou!')

        var change = window.document.getElementById('geniusDefault')
        change.src='assets/genius-sad.png'

        setTimeout(function() {
            alert('Você ganhou! Parabéns!')
        }, 100)

    } else if (secretNumber <= chosenNumber) {
        alert('Erro! o número é menor.')
        console.log('Errou!')
    } else if (secretNumber >= chosenNumber) {
        alert('Erro! o número é maior.')
        console.log('Errou!')
    }
}

// Botão de Reiniciar

function reload(){
    window.location.reload();
} 