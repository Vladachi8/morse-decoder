const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrExpression = [];
    let arrResult = [];
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        arrExpression.push(expr.substring(i, i + 10));
    }
    for (let i = 0; i < arrExpression.length; i++) { //foreach
        let letter = '';
        if (arrExpression[i] === "**********") {
            arrResult[i] = ' ';
        } else {
            let j = 0
            while (j < arrExpression[i].length) {
                const subString = arrExpression[i].substring(j, j + 2);
                if (subString === '10') {
                    letter += '.';
                } else if (subString === '11'){
                    letter += '-';
                }
                j += 2;
            }
            arrResult[i] = MORSE_TABLE[letter]
        }
    }
    result = arrResult.join('');
    return result

}

module.exports = {
    decode
}