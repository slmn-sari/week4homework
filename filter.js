const computer = require('./data.js');

let sonuc = null;


sonuc = computer.filter(item => item.Kullanim == 'Notebook');

console.table(sonuc);
