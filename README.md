# 1upChallengeData

#
Welcome!

Hello! Thank you for taking a look at this repository. The following is an implementation of a system that is designed ask questions 
via the command line, save the gathered answers, check them against a FHIR format ndjson, count the direct and indirect instances, and tabularize them.

#
To Run

Please first install the dependencies and peer dependencies. Then simply type "npm start".

#
Why did I choose this implementation?

The implementation chosen is meant to highlight a flexible architecture that is arranged as a collection of microservices. I chose Node.js because this is the
primary technology used by 1UpHealth. It also allows me to leverage the robust node community via the use of various npm packages. Another good option would have 
been to implement this in Python.

#
What packages did I choose?

inquirer 
- Inquirer was the best choice for my implementation, because it is a robust and well documented cli for prompting and receiving input. There are more robust cli
implementations like commander and yargs, but they had much more functionality than was needed here.

fhir-crud-client
- Due to a permission issue expanded in the next section, I chose this package as the best available option for read operations from a FHIR server. To simulate this I 
used the ndjson files provided, filtered them using the answers from the previous package, then filtered them again to see if they were mentioned indirectly.

cli-table
- Similarly to the choice made in using inquirer, many solutions for command line tables exist, but cli-table seemed like the best fit. This is due to it being
lightweight and not overly feature filled.

#
What problems arose?

One of the main issues that I faced in this implementation was with connecting to the S3 bucket due to the lack of appropriate permissions on my account 
from the owner of the bucket. If this was not the case, my implementation would have been much simpler. This is due to the availability of the s3-query-json package 
which allows developers to directly query S3 buckets using SQL select queries. By using SQL directly, it would be simple to generate tabularized output for the command line.

#
Thanks!

Thanks for taking a look! Be sure to take a look at my first challenge at https://github.com/a1irahman/1upChallenge

Please feel free to direct any and all questions to alirahman@me.com

Have a wonderful day wherever you may be, and happy coding!
