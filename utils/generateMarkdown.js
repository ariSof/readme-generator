const testData = {title: "sampleTitle"};

// Function to generate markdown for README with data entered.
function generateMarkdown(data) {

  const readMeText = `# ${data.title}

  ![License_Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation) \n
  - [Usage](#usage) \n
  - [Contrubution_Guidelines](#contrubution-guidelines)\n
  - [Test_instructions](#test-instructions)\n
  - [License](#license)
  
  
  ## Installation
  
  ${data.instructions}
  
  ## Usage
  
  ${data.usage}

  ## Test Instructions
 
  ${data.test}
  
  ## Contrubution Guidelines
  
 ${data.contribution}
  
  ## License
  
  ${data.license} 
  
  ## Questions
  [GitHub](https://github.com/${data.github}) \n
  For Additional questions email me at [${data.email}](mailto:${data.email})`
  
  return  readMeText;
  
}

module.exports = generateMarkdown;
