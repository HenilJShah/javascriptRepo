// && - AND Ope - Both side need to true
// || - OR Ope - One side need to true

let isloggedin = true
let isverified = false
let isparmid = true
let isguest = true


if (isloggedin && isverified && isparmid) {
    console.log('login user');
}

else if (isverified || isguest) {
    console.log('Allow free previews');
}

else {
    console.log('please contact admin');
}