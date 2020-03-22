module.exports = function toReadable (number) {
    const obj1 = {
        0: 'zero', 1: 'one', 2: 'two',
        3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight',
        9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
        13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
        80: 'eighty', 90: 'ninety'
    };
    arr = number.toString().split('');
    if (arr.length == 1) {
        return obj1[number];
    }
    if (arr.length == 2) {
        if (( number < 21 ) || (number%10 == 0)) {
            return obj1[number];
        } else {
            return (obj1[parseInt(arr[0])*10]+
            ' '+
            obj1[parseInt(arr[1])]); 
        }
    }
    if (arr.length == 3) {
        str = obj1[parseInt(arr[0])]+
        ' hundred';
        number = number - parseInt(arr[0])*100
        if (number > 0) {
            if (( number < 21 ) || (number%10 == 0)) {
                str = str + ' ' + obj1[number];
            } else {
                str = str +' ' + (obj1[parseInt(arr[1])*10]+
                ' '+
                obj1[parseInt(arr[2])]); 
            }
        }
        return str;      
    }
}
