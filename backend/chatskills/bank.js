var chatskills = require('./lib/chatskills');

// Create a new skill.
var bank = chatskills.add('bank');

var date = new Date(); //Date manipulation    

//Reading from the text
var x = parseInt('2423');
var y = parseInt('2034')

// Create intents.
bank.intent('Balance', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {my| } balance']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            res.say('Your balance on ' + (date.getDate()).toString() + '/' + (date.getMonth()).toString() + ' is ' + x);
        }

        return true;
    }
);


bank.intent('balance-yesterday', {
        'slots': { 'STATE': 'NUMBER' },
        'utterances': ['{for} {last| } balance']
    },
    function(req, res) {
        var state = req.get('state') || 0;
        if (state < 3) {
            req.set('state', state + 1);
            date.setDate(date.getDate() - 1);
            res.say('Your balance on ' + (date.getDate()).toString() + '/' + (date.getMonth()).toString() + ' was ' + y);
        }

        return true;
    }
);