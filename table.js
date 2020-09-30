//Importing relevent NPM packages
const Table = require('cli-table');

//Importing counter from FHIRCRUD
const counter = require('./FHIRCRUD');
const resourceType = require('./FHIRCRUD');

var table = new Table();
 
table.push(
    { resourceType: counter }
);
 
console.log(table.toString());