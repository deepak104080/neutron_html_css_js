// Boolean
// String
// Number

// Array
// Object
// Map, Set, WeakMap, WeakSet


// var sttr = '<div class="header"><div class="logo newclass">Logo</div><div>Search</div><div>Button</div><div>More Options</div><div>Cart</div></div>';

// var arr = ['<div class="header">', [div, h1, span, div, [div, div, [div, div]]]];


// var obj = {
//     header: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         },
//         div: {
//             p: 'para',
//         }
//     },
//     main: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         },
//         div: {
//             p: 'para',
//         }
//     },
//     footer: {
//         div: {
//             h1: 'liauwegf',
//             h2: 'uigf'
//         }
//     }
// }


// window.document


// window - Browser
// document - Current HTML Page


// window.document
// document
// DOM - Document Object Model

// BOM - Browser Object Model
// window.history - to store tab history

// window.location - details of current page URL
// reload, page change

// window.console.log('jyd');
// window.alert('welcome to xyz ');

// var ret = window.confirm('Are you single...?');
// console.log(ret);

// if(ret) {
//     console.log('you can visit this page.');
// }
// else{
//     console.log('you can not visit this page.');
// }

// var ret2 = window.prompt('Enter your name...');
// console.log(ret2);


// localStorage and sessionStorage - temp storage of data in browser

// innerHeight and innerWidth
// window.screen

// window.navigator - browser technical details

// window.document
// properties and methods - 



let movie_name = document.getElementById('movie_name');
console.log(movie_name);
// movie_name = 'iugewaf';

document.getElementById('movie_name').innerHTML = 'Badshah';
// HW - find the difference b/w innerHTML, innerText, textContent

// window.onload(
    
// )

let cast = document.getElementsByClassName('cast');
let paras = document.getElementsByTagName('p');

console.log(cast);
console.log(paras);

console.log(cast[0].innerHTML);
console.log(cast[1].innerHTML);


console.log(paras[0].innerHTML);
console.log(paras[1].innerHTML);


var movies_names = document.querySelector('.movie #movie_name');
var movies_cast = document.querySelectorAll('.movie span');

console.log(movies_names);
console.log(movies_cast);


document.querySelectorAll('.movie span')[0].innerHTML = 'Ms ABC';