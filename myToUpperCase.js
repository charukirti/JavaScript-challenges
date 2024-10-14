'use strict';

function convertToUpperCase(value) {
    let result = '';

    for (let i = 0; i < value.length; i++) {

        let charCode = value.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += value[i];
        }
    }

    console.log(result);
}

convertToUpperCase('charukirti');
convertToUpperCase('HELLO WORLD');