//get the reference of eventemitter class of events module
var events = require('events');

//create an object of eventemitter class by using above reference 
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent 
em.on('SecondEvent', function(data) {
    console.log('Fist Subscriber: ' + data);
});

//Raising FirstEvent 
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

//Raising SecondEvent 
em.emit('SecondEvent', 'This si my second Node.js event emitter example');


