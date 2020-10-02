// function to generate markdown for README
function generateMarkdown(answers) {
  // Everything between the backticks will be on the README
  return `
  # ${answers.title}

  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  [![license-badge](https://img.shields.io/badge/License-${answers.license}-red.svg)](https://shields.io/)
  ## Description

  ${answers.description}

  ## Table of Contents
  * [Images](#images)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#tests)

  ## Images


  
  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}
  
  ## License

  This project is covered under the ${answers.license} License.

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
// Send this newly completed README back to the Index to create the file
module.exports = generateMarkdown;
