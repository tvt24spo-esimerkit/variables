const numbers = [11, 22, 33];

console.log(numbers[0]);

const bookData=[
    {'name' :"C++", 'author' :"Jim Smith"},
    {'name' :"Java", 'author' :"Lisa Jones"},
    {'name' :"MySQL", 'author' :"Bob Danieles"}
];

// eka rivi
console.log(bookData[0]);
// eka author
console.log(bookData[0]['author']);

// tulostetaan koko taulukko
console.log(bookData);

// taulukon koko
console.log(bookData.length);
// kaikkien kirjojen nimet
for(let x=0; x<bookData.length; x++){
    console.log(bookData[x]['name']);
}
// sama forEach loopilla
bookData.forEach(element => {
    console.log(element['name']);
});

bookData.forEach(element => {
    console.log(element['name']+" "+element['author']);
});
