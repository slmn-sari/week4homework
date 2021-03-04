const computer = require ('./data.js');

let result = null;


result = computer.find(item => item.marka == 'Asus');
console.table(result);