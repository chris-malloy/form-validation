// console.log('hello, world')
// console.log($)

//////////////////TEMPLATE LITERALS///////////////////
// The common way that javascript works is by using anonymous functions like you see here

// $(document).ready(function() {

// });

// setInterval(function() {

// }, 5000);

// router.get('/login', function() {

// });

// $('.menu-item').toggleFade(1000, function() {

// });

//////////////////ROCKET FUNCTION///////////////////
// can do similar to above, but a shorthad way of writing an anonymous funciton
// function() === ()=>
$(document).ready(() => {

})

//////////////////MAP FUNCTION///////////////////
// map is a fancy for loop.
var students = ['Eddie', 'Valerie', 'Michael', 'Scott', 'Mikayla', 'Jennifer', 'Zach'];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// EVERY array, has a map function
// map takes 1 arg
// 1. function to run on EVERY element in the array
students.map((student, index) => {
    console.log(student)
    console.log(index);
});