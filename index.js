const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { generateShape } = require('./lib/generateShape');

// Function to check if the input is a valid color keyword
function isValidColorKeyword(color) {
  const validColorKeywords = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange'];
  return validColorKeywords.includes(color.toLowerCase());
}

// Function to check if the input is a valid hexadecimal color
function isValidHexColor(color) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
  return hexColorRegex.test(color);
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, must not be more than 3 letters',
      validate: function (input) {
        if (input.length <= 3) {
          return true
        }
        else {

          return 'Please enter 3 letters or less';
        }
      }
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's text color`,
      validate: function (input) {
        if (isValidColorKeyword(input) || isValidHexColor(input)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or a valid hexadecimal color';
        }
      }
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
      validate: function (input) {
        if (isValidColorKeyword(input) || isValidHexColor(input)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or a valid hexadecimal color';
        }
      }
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
  .then((data) => {
    const svgPath = './examples/logo.svg';
    const finalLogo = generateShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
  .catch((err) => console.error(err));