let userRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} welcome admin`

        case "user":
            return `${name} welcome user`

        default:
            return `plz select the currect Role...! ${role}`
    }
}


console.log(userRole('deadpool', 'admin'));
console.log(userRole('deadpool', 'user'));
console.log(userRole('deadpool', 'tester'));

let getRole = userRole('pool', 'admin');
console.log(getRole);