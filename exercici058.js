const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un numero enter: 4
    Escriu un altre numero enter: 2
    4 és més gran que 2

Un altre exemple:

    Escriu un numero enter: 2
    Escriu un altre numero enter: 6
    6 és més gran o igual que 2

*/

function mesGran (a, b) {

    let resultat = false

    // TODO: Posa la variable 'resultat' a 'true' si 'a' és més gran que 'b'

    return resultat
}

async function main () {

    let numero0 = parseFloat(await prompt("Escriu un numero enter: "))
    let numero1 = parseFloat(await prompt("Escriu un altre numero enter: "))
    
    // Escriu la resposta segons els exemples, tenint en compte
    // el resultat de la funció 'mesGran' quan es crida amb els paràmetres
    // 'numero0' i 'numero1'

    prompt.end()
}

main()