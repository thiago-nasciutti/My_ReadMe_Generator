// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache 2.0") {
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
  }
  if (license == "Boost 1.0") {
    return `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
  }
  if (license == "BSD 3-Clause") {
    return `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`;
  }
  if (license == "BSD 2-Clause") {
    return `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`;
  }
  if (license == "No license") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  if (license == "Boost 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  }
  if (license == "BSD 3-Clause") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
  if (license == "BSD 2-Clause") {
    return `https://opensource.org/licenses/BSD-2-Clause`;
  }
  if (license == "No license") {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ## Description
    ${data.descripition}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License Badge
    ${renderLicenseBadge(data.license)}

  ## License Link
    ${renderLicenseLink(data.license)}
  `;
}

module.exports = generateMarkdown;
