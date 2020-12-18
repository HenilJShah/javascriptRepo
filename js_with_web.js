// print
console.log('hello');


// alert
// alert('hello')

// variable
var a = 'title';
console.log(a, '<- A variable');

// send the html with id
document.getElementById('p_tag').innerHTML = 'send data from js';

// here the user can input here

// var name = prompt("enter the name");
// document.getElementById('p_tag').innerHTML = name;
// console.log(name, '<- here the user pass the name');

// simple sum
// var num1 = prompt("enter the number");
// num1 = num1 + 15;
// tmep = document.getElementById('p_tag').innerHTML = num1;
// console.log(tmep);

// number oprations
document.getElementById('h1').innerHTML = "here the simple oprations";

var no1 = 15.8;
document.getElementById('h1').innerHTML = no1++;
document.getElementById('h2').innerHTML = no1--;
document.getElementById('h3').innerHTML = no1 / 7;
document.getElementById('h4').innerHTML = no1 % 5;
document.getElementById('h5').innerHTML = no1 ^ 5;
document.getElementById('h6').innerHTML = no1 ** 5;


// functions
// 1. create a functions
// 2. call a functions

// create 
function fun() {
    console.log("woo hoo functions");
}

// call
fun();


// eg,
/*
create func() and take a name var and print 'name + hello'
*/

// function namefunc(){
//     var name = prompt("enter the name");
//     alert('hello\t' + name);
// }
// namefunc();


// func with args
function withargs(numb1, numb2) {
    // var res = numb1 + numb2;
    // alert(res);
}
withargs(10, 20);

// while loop
var a = 0;
// while (a<10) {
//     // a += 1;
//     console.log(a);
// }


// For loop
// for (let index = 0; index <= 100; index++) {
//     console.log(index);
// }


// data type

//number
let yourAge = 18;

//str
let yourName = 'Henil';

//object
let name = { first_name: 'henil', last_name: 'shah' }

// bool
let truth = false;

//array + list
let list = ['1', '2', '3']

// undefind
let random;

// value null
let nothing = null;

// string in javascript (common methods)
let fruit = 'apple';

console.log(fruit.length, '<-this is the len of "fruit"');
console.log(fruit.indexOf('l'), "find the element of 'fruit' in 'l'"); // find the element of 'fruit' in 'l'
console.log(fruit.slice(1, 4), '< - here the range'); //range func
console.log(fruit.replace('app', '123'), '<- replace func'); //replace func
console.log(fruit.toUpperCase(fruit), '<- uppercase func'); //replace func
console.log(fruit.toLowerCase(fruit), '<- lowercase func'); //replace func

console.log(fruit.charAt(3), '<- pick the char in str'); //replace func
// or
console.log((fruit[3]), '<- pick the char bt pythonic way');

console.log(fruit.split(''), '<- here the split func');
console.log(fruit.split(', '), '<- here the resplit func');

let new_var = 'apple, orange, blackberry';
console.log(new_var.split(', '), '<- split with list/array');


// here the find the elements of index

// create
function here_the_len_of_str() {
    let name = prompt("enter string:");
    console.log(name);

    let find = prompt("enter the char to find in str");
    console.log(name.indexOf(find));
    let res = name.indexOf(find);

    document.getElementById('h1').innerHTML = res;

}

// call
// here_the_len_of_str();

// ARRAY
let array1 = ['a', 'b', 'c', 'd']; // simple array create look like python
let array2 = new Array(1, 2, 3, 4); //it's a array but look like c programming

// how to call
// alert(array1[0]);
// alert(array1[1]);
// alert(array1[2]);
// alert(array1[3]);

// how to update array data

// console.log(array1, 'here the we create array');
// console.log(array1[0] = 'aa');
// console.log(array1, 'then here the array is updated');


for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element, '<- here the array1 element');
}


// array common methods
// toString method
console.log('to String method->', array2.toString());

// join method
console.log('join method ->', array2.join(' - '));

// pop method
// console.log('here the "d" is pop ->',array1.pop(), array1);

// push method
console.log('push->', array1.push('e'), array1); //append method like python

// &
array1[array1.length] = 'new data';
console.log('here the new data append using length -> ', array1);

// shift method
array1.shift(); //1st item removed
console.log('here the 1st item remove using shift method ->', array1);

// unshift method
array1.unshift('unshift_method');
console.log('here the unshift method to use add 1st element to an array ->', array1);

// concat method 
let concat_arrays = array1.concat(array2);
console.log('here the 2 array concat in one array', concat_arrays);


// slice with (start to end)
console.log(concat_arrays.slice(1, 4), '< - here the slice the array');


// revers method
console.log(concat_arrays.reverse()), '<- here the revers method';


// sort number
let somenumber = [1, 5, 9, 8, 2, 7, 2, 19];


// sorting with functions a to z
console.log(somenumber.sort(function (a, b) {
    return a - b
}));


// sorting with function z to a 
console.log(somenumber.sort(function (a, b) {
    return a - b
}));


let emptyArray = new Array();
function dynamic_array() {
    for (let index = 0; index < 6; index++) {
        emptyArray.push(index);
        console.log(emptyArray, '<- here the array', index + 1);
        document.getElementById(index).innerHTML = 1;
    }
}
dynamic_array();

