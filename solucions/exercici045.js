const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    M'he comprat un televisor Samsung
    que és de 55 pulzades
    Aquesta televisió té SmartTV

*/

async function main () {

    // Modifica el següent objecte cotxe, perquè la sortida sigui correcte

    let televisio = {
            marca: 'Samsung',
            pulzades: 55,
            smart: true
        }

    console.log('M\'he comprat un televisor', televisio.marca)
    console.log('que és de', televisio.pulzades, 'pulzades')
    
    // Posa aquí una condició per escollir entre les seguents frases
    // segons si la TV té SmartTV o no
    if (televisio.smart) {
        console.log('Aquesta televisió té SmartTV')
    } else {
        console.log('Aquesta televisió no té SmartTV')
    }
    
    prompt.end()
}

main()