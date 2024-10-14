'use strict';

// # Learning

const avengers = ['Captain America', 'Tony Stark', 'Hulk', 'Black Widow', 'Hawkeye', 'Thor'];

// avengers.forEach(function(value){
//     if(value === 'Tony Stark') return;
//     console.log('Test 1',value)
// })

// avengers.forEach(function(value) {
//     if(value === 'Tony Stark' || value === 'Captain America') return;
//     console.log('Test 2',value)
// })


// # Exercises

// 1) Basic Array Iteration Given an array of your friends' names, use forEach to print each name to the console.

const friends = ['Alice', 'Bob', 'Charlie', 'David'];

friends.forEach(function (names) {
    console.log(names);
});


// 2) Calculate the Sum Write a function that uses forEach to calculate the sum of an array of numbers.

const numbers = [10, 20, 30, 40, 50];
// Expected output: 150

let sum = 0;
numbers.forEach(function (num) {
    sum += num;
});
console.log(sum);

// 3) Create Your Own Greeting Use forEach to iterate over an array of objects where each object represents a person with a name and age property. Print a custom message for each person.

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 20 }
];
// Example message: "John is 25 years old"


people.forEach(function (value) {
    console.log(`${value.name} is ${value.age} years old`);
});

// 4) Check Even or Odd Use forEach to iterate through an array of numbers and print whether each number is even or odd.

const values = [5, 12, 8, 130, 44];

values.forEach(function (value) {
    if (value % 2 === 0) {
        console.log(`${value} is even number`);
    } else {
        console.log(`${value} is odd number`);
    }
});


// 5) Uppercase Names Create a function that uses forEach to convert an array of names into uppercase and print each one.

const names = ['john', 'jane', 'doe'];

names.forEach(function (name) {
    console.log(name.toUpperCase());
});

// 6) Transform Array Use forEach to add 10 to each element of the following array and print the updated values:

const scores = [45, 67, 89, 12, 78];

scores.forEach(function (score) {
    console.log(score + 10);
});