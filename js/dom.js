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


// innerHTML/innerText/textContent - Access/Write content inside any element
{/* <div>My name</div> */}

let temp_div = document.createElement('div');
console.log(temp_div);
temp_div.innerText = "--------------My name------------------";
console.log(temp_div);

let temp_parent_div = document.getElementsByClassName('movie')[0];
console.log(temp_parent_div);
temp_parent_div.appendChild(temp_div);


/* 
<div class="travel">
    <ul>
        <li>Car</li>
        <li>Bike</li>
    </ul>
</div>
*/

let temp_div_list = document.createElement('div');
temp_div_list.setAttribute('class', 'travel');

let temp_ul_list = document.createElement('ul');

let temp_li_1_list = document.createElement('li');
temp_li_1_list.innerHTML = 'Car';
temp_ul_list.appendChild(temp_li_1_list);

let temp_li_2_list = document.createElement('li');
temp_li_2_list.innerHTML = 'Bike';
temp_ul_list.appendChild(temp_li_2_list);

temp_div_list.appendChild(temp_ul_list);
console.log(temp_div_list);

let body_temp = document.getElementsByTagName('body')[0];
body_temp.appendChild(temp_div_list);

//Append - appendChild, append, removechild, replaceChild
//HW - use loop for multiple li creation

// jQuery - Do not use - $
document.getElementById('movie_name').style.color = 'red';

document.getElementById('tagline').getAttribute('class');
//HW - create element of img type and add image to it and display in movie element.


let temp = document.querySelector('.movie');
temp.childNodes
temp.children




// DOM Event Methods- click, blur, change, hover, focus, focusin, focusout, select, scroll, mouseover, keyup, keydown, keypress, touch, slide

// inline function in html



// DOM Event - Object
// event.target


function display_name(event) {
    console.log(event);
    console.log(event.target);
    //alert('My name is Deepak.')
}

function display_name_input() {
    let temp = document.getElementById('your_name').value;
    console.log(temp);
    //alert('My name is - ' + temp);
}

function select_fn() {
    console.log('selected...')
}


function temp_fn (event) {
    console.log(event.target);
    console.log(event.target.innerHTML);
}

//HW - how to read checkbox, radio



// add event listener
// event propogation
// delegaton
// localStorage
// validation
// regex




// var iframe_temp = document.getElementById('iframe_temp');
// console.log(iframe_temp);
// iframe_temp.contentWindow.document