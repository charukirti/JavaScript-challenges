'use strict';

const str = 'Hello';

function reverseString(str) {

    if (typeof str !== 'string') throw new Error('This is not string');

    let newString = str.split('').reverse().join('');
    console.log(
        'Original string',
        str
    );

    console.log(
        'Reversed string',
        newString
    );


}

reverseString(str);
reverseString('World');

// this will not execute as type is not string
reverseString('324')