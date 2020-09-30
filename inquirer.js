//Importing relevent NPM packages
const inquirer = require('inquirer');

//Questions which when answered will serve as the queries for the S3 bucket
const questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What is your first name",
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What is your last name",
  },
  {
    type: 'input',
    name: 'patient_ID',
    message: "What is your Patient ID number? "
    },
];

const exportedAnswers = inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});

module.exports = exportedAnswers;