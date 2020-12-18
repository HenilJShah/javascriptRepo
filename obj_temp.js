var user = {
    username: 'deadpool',
    book: [],
    buyBook: function (book_name) {
        return this.book.push(book_name);
    },
    countBook: function () {
        return `${this.username} have ${this.book.length} books and books name are ${this.book}`
    }
};


// called
var buyBook = true;
// console.table(user);
user.buyBook('python');
user.buyBook('flutter');
user.buyBook('js');
console.table(user.countBook());
// console.log(user.book);



