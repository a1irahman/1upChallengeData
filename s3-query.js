//Importing relevent NPM packages
const {query} = require('s3-query-json');

query('./Condition.js', 'Condition.ndjson', 'SELECT s.name FROM S3Object s', {documentType: 'NDJSON'})
    .then(data => console.log(data));