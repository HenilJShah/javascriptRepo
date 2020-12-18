// there is a normal func program
// name : odd and even

function isEven(ele) {
    let element = parseInt(ele);
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;


    // there is a an other method to do same as
    return element ? true : false
}


// here the call func
// input type: str, int any you want
console.log(isEven("2"));




// here the func as a variable the use arrow method like '=>'
// '=>' is called callbackfn
var iseven = (element) => {

    // you used the arrow method then 
    // you have must use return keyword 
    // otherwise they gives a error's like 'undefined'
    return element % 2 === 0;
}

// called func
console.log(iseven(2));


// there is a another way 
var res = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});

// called
console.log(res);

// one more method 
var res1 = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(res1);

