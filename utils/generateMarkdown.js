// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseUrl = `![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)`;
  const none = 'N/A';
  if(data.license === 'MIT'||'GPLv3'||'Apache_2.0'){
    return licenseUrl;
  } else{
    return none;
  } 
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const mit = `https://choosealicense.com/licenses/mit/`;
  const GPLv3 = `https://choosealicense.com/licenses/gpl-3.0/`
  const Apache2 =`https://choosealicense.com/licenses/apache-2.0/`
  const none = 'N/A';
  if(data.license === 'MIT'){
    return mit;
  } 
  else if(data.license === 'GPLv3'){
    return GPLv3;
  } 
  else if(data.license === 'Apache_2.0'){
    return Apache2
  }
  else{
    return none;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  [${data.license}](${renderLicenseLink(data)})

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Let me know if you need any help from me, you can contact me at ${data.email}. For more detail, please visit https://github.com/${data.userName} or https://hpyorange.github.io/JasperWeb/.
`;
}

module.exports = generateMarkdown;
