let array = [10];

// len
console.log('array len', `${array}`);

let apps = ['insta', 'yt', 'linkedin', 'quora']


for (let index = 0; index < apps.length; index++) {
    console.log('\napps~~~~>>>>>>>>>>', `${apps[index]}`);
}


console.log('here the normal array------>>>>>>>>', `${apps}`);

console.log('here the add *fb* in array');

// push last item added in array
apps.push('fb')
console.log(apps);


// here the last item delete using pop method
console.log('here the delete last item');
apps.pop();
console.log(apps);




// here the we see which ele is remove or insert
// store in variable

let push_var = apps.push('yahoo');
console.log('here the see the element number', `${push_var}`);
console.log(apps);


let push_pop = apps.pop('yahoo');
console.log('here the see the element number', `${push_pop}`);
console.log(apps);



// 1st element remove
apps.shift();
console.log('here the delete 1st element~~~~>>>>', apps);

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(a.length);
for (let i = 0; i <= a.length; i++) {
    a.pop();
    console.log(a);

    if (i<=a.length) {        
    }
    else {
        console.log('i val = >', i);
        console.log(a.length);
        console.log(a);
    }
}



// here the added on index starting using unshift()
apps.unshift("temp1");
apps.unshift("temp2");

// added list
let list_array = ['abc', 'xyz']
apps.unshift(list_array);

// here the added multipel element
apps.unshift('hello', 'world')

console.log(apps);







// find the element with index number

console.log('here the "world" key word on index>>' + apps.indexOf('world'));


// join method
console.log(apps.join(" <-----> "));

// splice method
// let temp = apps.splice(4, 6) // start to end
// console.log(temp);

apps.splice(1, 0, 'prog', 'html');
console.log(apps);


// replace method
apps.splice(1, 1, ['pro', 'codex']);
console.log(apps);


// 2d array
let board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(board);



// Array.from method
console.log(Array.from("deadpool"));

// output:
// [
//     'd', 'e', 'a',
//     'd', 'p', 'o',
//     'o', 'l'
// ]


// every method

// func check even
let iseven = (Element) =>{
    return Element % 2 === 0;
}

let arr = [2, 4, 6, 8].every(iseven);
console.log('here the every elemeet check in func====> ' + arr);

// output
// here the every elemeet check in func====> true