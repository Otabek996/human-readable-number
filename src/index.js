const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

module.exports = function toReadable (number) {
    const numArr = String(number).split('');
    let res = '';
    
    for (let index in numArr) {
        if (numArr.length == 3) {
            if (index == 0) {
                res += numbers[Number(numArr[index])] + ' hundred';
            } else if (index == 1) {
                if (numArr[index] == '0') continue;
                if (numArr[index] == '1') {
                    res += ' ' + numbers[Number(numArr[index] + String(numArr[Number(index) + 1]))];
                    break;
                } else {
                    res += ' ' + numbers[Number(numArr[index] + '0')];
                }
            } else if (index == 2 && numArr[index] != '0') {
                res += ' ' + numbers[Number(numArr[index])];
            }
        } else if (numArr.length == 2) {
            if (index == 0) {
                if (numArr[index] == 1) {
                    res += numbers[Number(numArr[index] + String(numArr[Number(index) + 1]))];
                    break;
                } else {
                    res += numbers[Number(numArr[index] + '0')];
                }
            } else if (index == 1 && numArr[index] != '0') {
                res += ' ' + numbers[Number(numArr[index])];
            }
        } else {
            res += numbers[Number(numArr[index])];
        }
    }
    
    return res;
}
