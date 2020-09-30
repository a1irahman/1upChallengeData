//Importing relevent NPM packages
const { FHIRClient } = require('fhir-crud-client');
const exportedAnswers = require('./inquirer');


//Create FHIR Client
const BASE_URL = './Condition.ndjson'; //Enter FHIR URL Here
const HEADERS = {
  Accept: 'application/json',
};
 
const client = new FHIRClient(BASE_URL, HEADERS);

//Resource type of the file in question
const resourceType = 'Patient';

//Read a resource
const patientResource = client.read({ resourceType: {resourceType}});

//Resource test
console.log(resource);

//Array to hold first filter pass of data
const firstPass = [];

//Filter resource
arr.filter((resourceType) => {
  resourceType.id == exportedAnswers;
  firstPass.push
});

//Filter resources pointing at other resources
firstPass.filter((resourceType) => {
  resourceType == exportedAnswers;
})

//Counter variable to add to if match is found
const counter = 0;

//Compare resource to answers provided from inquirer.js cli prompts
if (resourceType.keys === exportedAnswers) {
  counter++;
} else {
  return console.log('No match found in this file');
}

module.exports = counter;
module.exports = resourceType;