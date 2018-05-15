const inquirer = require('inquirer');
const axios = require('axios');

const handleHelpRequest = async questions => {
  const request = await inquirer.prompt(questions);
  axios
    .post(
      'https://us-central1-helpdesk-v2-fadc0.cloudfunctions.net/addMessage',
      request
    )
    .then(() =>
      console.log('\x1b[32m', 'Thanks! Someone will be with you in a minute')
    )
    .catch(err =>
      console.log(
        '\x1b[31m',
        `Something went wrong. Please show a tutor the following error message: \n${err}`
      )
    );
};
module.exports = handleHelpRequest;
