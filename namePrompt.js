var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' +  userName  + '!' );