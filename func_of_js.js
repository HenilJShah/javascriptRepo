let a = 10;
let b = 20;

// called func
sums(a, b);
let total = sums(100, 200);
console.log('ans. is', total);


// func
function sums(a, b) {
    let sum_data = a + b;
    // console.log(sum_data);
    return sum_data;
}


function total_ans(a, b) {
    let ans = a + b;
    return ans;
}



// func as variable
const avg = function (a, b) {
    return (a + b) / 2;
};



let x = avg(100, 150);
console.log('ans. is', x);

