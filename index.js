const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "Enter project title",
      name: "title",
    },
    {
      type: "input",
      message: "Enter desctiption",
      name: "description",
    },
  ])

  .then((answers) => {
    // Use user feedback for... whatever!!
    `# ${answers.title}

    ## Description
    ${answers.description}
    
    `;
  });
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

module.exports = generateMarkdown;
