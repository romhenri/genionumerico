// Sorteio do Número Secreto

var secretNumber = parseInt(Math.random() * 100)
const tryTimes = document.getElementById('tryTimes')
var tries = 0
var used = []

tryTimes.innerHTML = ('Tentativas: ' + tries)

console.log(secretNumber) 
console.log(used);

// Botão de Tentar

function play() {
    console.log('Tentou!')

    var cn = window.document.getElementById('n')
    var chosenNumber = Number(cn.value)

    tries = tries + 1
    tryTimes.innerHTML = ('Tentativas: ' + tries)

    // alert(`Você escolheu tentar com ${chosenNumber}`) // Teste
    console.log(`Jogador escolheu tentar com ${chosenNumber}`);

// Cenários de Acertos

    if (secretNumber == chosenNumber) {
        let change = window.document.getElementById('genius')
            change.src='assets/genius-sad.png'

        if (tries == 1) {
            console.log('Acertou!')

            alert(`Você ganhou! com uma única tentativa, uau!`)

        } else if (tries >= 5) { 
            var changeHuman = window.document.getElementById('humanDefault')
            changeHuman.src='assets/human-default.png'

            alert(`Você ganhou! com ${tries} tentativas, Parabéns!`)
        }

// Cenários de Erros

        // Número Inválido

        } else if (chosenNumber == NaN || chosenNumber == 0) {
            alert('Escolha um número para tentar.')

            tries = tries - 1

            tryTimes.innerHTML = ('Tentativas: ' + tries)

        // Número Fora das Opções 

        } else if (chosenNumber > 100) {

            alert('O número pensado pelo gênio está entre 1 e 100.')
            console.log('Número fora das opções.')

            tries = tries - 1  
            tryTimes.innerHTML = ('Tentativas: ' + tries)

        } else if (used.includes(chosenNumber)) {
            console.log('Repetição detectada!');
            alert('Você já tentou esse número.')
            
            tries = tries - 1  
            tryTimes.innerHTML = ('Tentativas: ' + tries)

        } else if (!used.includes(chosenNumber)) {
            // Número Maior que o Pensado

            console.log('Tentativa Nova');

            if (chosenNumber > secretNumber) {

                alert('Erro! o número escolhido é maior que a resposta.')
                console.log('Erro! o número escolhido é maior que a resposta.')

                if (tries >= 5) {
                var changeHuman = window.document.getElementById('humanDefault')
                changeHuman.src='assets/human-not-good.png'

                used.push(chosenNumber)
                used = used.sort(function(a, b) {return a - b;});
                console.log(used);} else {}

            } else if (chosenNumber < secretNumber) {

                alert('Erro! o número escolhido é menor que a resposta.')
                console.log('Erro! o número escolhido é menor que a resposta.')
        
                if (tries >= 5) {
                var changeHuman = window.document.getElementById('humanDefault')
                changeHuman.src='assets/human-not-good.png'
                }
        
                used.push(chosenNumber)
                used = used.sort(function(a, b) {return a - b;});
                console.log(used);
                 
                }
        

        // Número Menor que o Pensado

        
        }
}

// Botão de Reiniciar

function reload(){
    window.location.reload();
} 

// Botão de Continuar