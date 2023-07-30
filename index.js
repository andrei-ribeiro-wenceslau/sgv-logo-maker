const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { generateShape } = require('./lib/generateShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, must not be more than 3 letters',
      validate: function (input) {
        if (input.length <= 3){
          return true
        }
        else{
          
          return 'Please type less than 3 letters';
        }
      }
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter text colour keyword or a hexadecimal number for the logo's test color`,
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
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