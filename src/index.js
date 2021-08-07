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
    ' ': '/'
};


function decode(expr) {
    let result = []
    for (let i = 10; i <= expr.length; i += 10) {
        if (expr[i-1] === '*') {
            result.push(' ')
        }
        let curStr = expr.substring(i - 10, i)
        result.push(curStr.replace(/11/g, '-')
            .replace(/10/g, '.')
            .replace(/00/g, ''))
    }

    return result.map(el => MORSE_TABLE[el]).join('').replace(/\//g,' ');
}

module.exports = {
    decode
}
