#!/usr/bin/env node
const handleHelpRequest = require('./handle-help-request.js');
const questions = require('./questions');

handleHelpRequest(questions);
