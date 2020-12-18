var user = {
    fname: 'dead',
    lname: 'pool',
    role: 'admin',
    loginCount: 32,
    fb_login: true,
    arr: [
        1, 2, 2, 3, 1, 4, 5
    ],
    // dict to list
    ls_to_dict: {
        id: 1,
        role: 'user',
        array: [2, 3, 1, 4, 5]
    },

    // func
    book: [],
    buyBook: function (book_name) {
        return this.book.push(book_name);
    },
    countBook: function () {
        return `${this.username} have ${this.book.length} books and books name are ${this.book}`
    }
};


console.log(user.fname + user.lname);
// console.log(user.arr[1]);
console.log("here the pick up the value is user=> dict inside ls_to_dict it's dict to dict and there is a ans...>", `${user.ls_to_dict.role}`);

// dict to dict value print
for (let i = 0; i < user.arr.length; i++) {
    const element = user.arr[i];
    console.log("index", `${i}\t` + element);
}


// update ele
console.log('here the role is in dict:', `${user.role}`);
user.role = 'staff';
console.log('here the role is in dict is updated:', `${user.role}`);


// all data
console.table(user);



// called 2 func
var buyBook = true;
user.buyBook('python');
user.buyBook('flutter');
user.buyBook('js');
console.log(user.countBook());