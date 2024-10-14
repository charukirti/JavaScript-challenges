'use strict';

// first way 

function capitalizeFirstLetter(str) {
    let result = '';
    let firstLetter = str.charCodeAt(0);

    if (firstLetter >= 97 && firstLetter <= 122) {
        result = String.fromCharCode(firstLetter - 32);
    } else {
        result += str[0];
    }

    result += str.slice(1);

    return result;
}

console.log(capitalizeFirstLetter('hello'));


// second way

function capitalizeFirst(str) {
    let firstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    return firstLetter
}


console.log(capitalizeFirst('charukirti'))