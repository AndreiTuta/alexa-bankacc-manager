var chatskills = require('./lib/chatskills');

// Create a new skill.
var bank = chatskills.add('bank');

var x = Math.random();

// Create intents.
bank.intent('Balance', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {my| } balance']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            res.say('Your balance is ' + x);
        }

        return true;
    }
);

bank.intent('Ethereum', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {the} {price} {of} ethereum']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            res.say('The price of ethereum is ' + x);
        }

        return true;
    }
);


bank.intent('Bitcoins', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {the} {price} {of} bitcoins']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            res.say('The price of a bitcoin is ' + x);
        }

        return true;
    }
);