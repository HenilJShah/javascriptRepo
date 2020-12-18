tips('10');

function tips(money) {
    let bill = parseInt(money);
    console.log(`this is tips: ${bill + 15}`);
}

tips('10');



// not accessible
// bigTips('20'); //here the variable and that's why function can't call it befor the code
// Cannot access 'bigTips' before initialization

let bigTips = function (money) {
    let bill = parseInt(money);
    console.log(`this is bigTips: ${bill + 15}`);
}

// it's accessible
bigTips('10');