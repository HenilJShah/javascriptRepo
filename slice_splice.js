// slice method
var users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice params (<startindex>, <endindex);
console.log(users.slice(0, 5));


// splice method 
// params is (<start index>, <count of delete>, <value>)
users.splice(3, 3, "HI");
// users.splice(3, 3, "HI", "BYE");

console.log(users);