// Require Inquirer, FS, and the generateMarkdown file
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    // Title
    {
      type: "input",
      message: "What is your project's name?",
      name: "title",
    },
    // Description
    {
      type: "input",
      message: "Briefly describe your application:",
      name: "description",
    },
    // Installation
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    // Usage
    {
      type: "input",
      message: "How do you use this application?",
      name: "usage",
    },
    // License
    // The generated README will include a badge of the selected license
    {
      type: "list",
      message: "Which badge would you like to use?",
      name: "license",
      choices: ["GNU", "MIT", "Mozilla", "Apache", "Boost", "Unlicense"],
    },
    // Questions
    // GitHub
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    // Github Repo
    {
      type: "input",
      message: "What is this project's repo?",
      name: "repo",
    },
    // Email
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])

  // Take the user's answers and push them to the generateMarkdown file
  .then((answers) => {
    const generatedFile = generateMarkdown(answers);
    // Take string and build file
    fs.writeFile("README.md", generatedFile, function (err) {
      if (err) {
        throw err;
      }
    });
  });
