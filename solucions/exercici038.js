const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu uns quants números separats per un espai:23 24 25 26 37 38 39 50
    Números parells que ha escrit l'usuari:
    El número 24 és parell
    El número 26 és parell
    El número 38 és parell
    El número 50 és parell

Ha de funcionar per qualsevol grup de números que escrigui l'usuari

*/

async function main () {

    let cnt = 0
    let text = await prompt("Escriu uns quants números separats per un espai:")
    let numerosText = []
    let numeros = []
    let numero = 0
    let parell = false

    // TODO: Transforma aquí el text que ha introduït l'usuari en un array i guarda el resultat a la variable 'numerosText'

    // El següent codi, transforma l'array de textos que hi ha a 'numerosText' en un array de números i el guarda a la variable 'numeros'
    numeros = numerosText.map((numero) => { return parseFloat(numero) })

    console.log('Números parells que ha escrit l\'usuari:')
    for (cnt = 0; cnt < numeros.length; cnt = cnt + 1) {
        numero = numeros[cnt]
        parell = ((numero % 2) == 0)

        // TODO: Posa aquí una condició, per tal que si el número és parell, l'escrigui tal i com està a l'exemple de sortida
    }

    prompt.end()
}

main()