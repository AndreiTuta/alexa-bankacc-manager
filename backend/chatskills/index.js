var Alexa = require('alexa-sdk');

//Premade values 

//Banking
var date = new Date(); //Date manipulation    
//Reading from the text
var x = parseInt('2423'); //passing the result of the Everis 
var y = parseInt('2034') // API as Integers

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
};



var handlers = {
    'HelloWorldIntent': function() {
        this.emit(':tell', 'Hello World!I am Alexa and here is a list of my features.');
    },

    'StartingIntent': function() {
        this.emit(':ask', "Would you like to know your balance, previous balance, make an appointment or operate with cryptocurrencies?");
    },


    'BalanceCheck': function() {
        this.emit(':ask', 'Would you like to check your balance?!');
        this.emit(':tell', 'You selected the Balance Check option'); //CONFIRMATION
        this.emit(':tell', 'Your balance on ' + (date.getDate()).toString() + '/' + (date.getMonth()).toString() + ' is ' + x + 'according to your Everis account!')
    },

    'PastBalanceCheck': function() {
        this.emit(':ask', 'Would you like to the check yesterdays balance? ');
        this.emit(':tell', 'You selected the Past Balance Check option'); //CONFIRMATION
        this.emit(':tell', 'Your balance on ' + (date.getDate()).toString() + '/' + (date.getMonth()).toString() + ' was ' + y + 'according to your Everis account!');
        ');
    },

    'Planner': function() {
        this.emit(':tell', 'I can help you manage your daily schedule.Let us begin');
        this.emit(':tell', 'Which date would you like to make your appointment?"');
        this.emit(':tell', 'And at what time, please?');
        this.emit(':tell', 'Could you please confirm?');

        this.emit(':tell', '"Great! Your event is successfully booked.');
    },

    'Ethereum': function() {
        this.emit(':tell', 'I can also help you research the cryptography market');
        this.emit(':ask', 'Do you want to know the price of Ethereum?');
        this.emit(':tell', 'At the moment,the price of ethereum is $' + 344.97 + 'Care for an analysis?');

        this.emit(':tell', 'Please see the terminal');
    }




};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'BookFlightIntent': function() {
        if (this.event.request.dialogState === 'STARTED') {
            var updatedIntent = this.event.request.intent;
            // Pre-fill slots: update the intent object with slot values for which
            // you have defaults, then emit :delegate with this updated intent.
            updatedIntent.slots.SlotName.value = 'DefaultValue';
            this.emit(':delegate', updatedIntent);
        } else if (this.event.request.dialogState !== 'COMPLETED') {
            this.emit(':delegate');
        } else {
            // All the slots are filled (And confirmed if you choose to confirm slot/intent)
            handlePlanMyTripIntent();
        }
    }
};