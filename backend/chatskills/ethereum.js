var chatskills = require('./lib/chatskills');

// Create a new skill.
var ethereum = chatskills.add('ethereum');

var myPythonScriptPath = '../python-prediction/prediction.py';
// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

// Create intents.
ethereum.intent('ethereum', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {price}']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            res.say("At the moment,the price of ethereum is $" + 344.97 + ' .Care for an analysis?')
            return true;
        }
    });

ethereum.intent('c', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ["{Yes|Ok}"]
    },
    function(req, res) {
        var state = req.get('state');
        if (state < 2) {
            req.set('state', state + 1);
            res.say('Here we go: ');
        }
        return true;

    }
);

ethereum.intent('ethereum-buy', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ["{I want to buy!} {some!}"]
    },
    function(req, res) {
        if (req.get('state') == 4) {
            res.say("Can't do that unfortunatelly.");
        }
    }
);