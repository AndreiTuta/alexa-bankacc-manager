var chatskills = require('./lib/chatskills');

// Create a new skill.
var ethereum = chatskills.add('ethereum');

var myPythonScriptPath = '../python-prediction/run.py';
// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

var x = 100;

// Create intents.
ethereum.intent('ethereum', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{about} {ethereum} {price}']
    },
    function(req, res) {
        pyshell.on('message', function(message) {
            // received a message sent from the Python script (a simple "print" statement)
            res.say(message);
        });

        // end the input stream and allow the process to exit
        pyshell.end(function(err) {
            if (err) {
                throw err;
            };

            res.say('Finished prediction');
        });

        return true;
    }
);