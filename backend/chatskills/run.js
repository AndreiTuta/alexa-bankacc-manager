var readlineSync = require('readline-sync');
var chatskills = require('./lib/chatskills');

// Create a new skill.
var hello = chatskills.add('hello');

// Create a new intent.
hello.intent('helloWorld', {
        'slots': {},
        'utterances': ['{to |}{say|speak|tell me} {hi|hello|howdy|hi there|hiya|hi ya|hey|hay|heya}']
    },
    function(req, res) {
        res.say('Hello, World!');
    }
);

// Include some other skills.
require('./bank');
require('./dateplanner');
require('./ethereum')

console.log('\n Welcome, here are some available commands to try: \n\n * chatskills, ask hello to say hi \n * chatskills, ask dateplanner to run\n \n Banking: \n * chatskills,ask bank for balance \n * chatskills,ask bank for last balance \n * chatskills,ask bank for price of ethereum/bitcoins \n');

// Example client.
var text = ' ';
while (text.length > 0 && text != 'quit') {
    text = readlineSync.question('> User: ');

    // Respond to what was typed.
    chatskills.respond(text, function(response) {
        console.log('> Bot: ' + response + '\n');
    });
}