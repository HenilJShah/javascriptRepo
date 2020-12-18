city = [
    'bhavnagar',
    'baroda',
    'goa',
    1984,
    'surat'
];

for (let i = 0; i < city.length; i++) {

    // only number
    if (typeof city[i] !== "string") continue;
        console.log(city[i])
    
    // only string
    if (typeof city[i] == "string") {
        // console.log(city[i]);
    }
}
