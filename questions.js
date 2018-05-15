module.exports = [
  {
    type: 'input',
    message: 'Hi there! And who the devil are you?',
    name: 'student'
  },
  {
    type: 'input',
    message: "What's up [INSERT STUDENT NAME HERE]?",
    name: 'text'
  },
  {
    type: 'list',
    message: "I'm so sorry to hear that. 😢. What cohort are you in?",
    choices: [
      'Core',
      'Back End 1',
      'Back End 2',
      'Front End 1',
      'Front End 2',
      'Project Phase'
    ],
    name: 'cohort'
  }
];
