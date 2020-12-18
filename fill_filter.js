// fill method
var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// fill params = (<value>, <start index>, <end index>)
// console.log(testArray.fill('h', 2, 5));


// output:
// [
//     0, 1, 'h', 'h', 'h',
//     5, 6, 7, 8, 9
// ]


// filter method
const res = testArray.filter((num) => {
    return num > 6
});
// console.log(res);


// another method
const res1 = testArray.filter((num)=>num>=5);
console.log(res1);