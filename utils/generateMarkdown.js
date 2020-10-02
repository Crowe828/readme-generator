// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description

  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#tests)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}
  
  ## License

  ${answers.license}

  ## Contributing

  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  Please make sure to update tests as appropriate.

  ## Tests

  console.log(test);
    
  The console will display the word 'test'

  ## Questions

  If you would like to learn more, feel free to check out my GitHub or send me an email anytime.

  * [GitHub](https://github.com/${answers.github})
  * [Repo](https://github.com/Crowe828/${answers.repo})
  * [Email Me](mailto:${answers.email}?subject=Nice%20README%20Generator%20Dude)

`;
}

module.exports = generateMarkdown;
