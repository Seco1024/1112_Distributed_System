const mqtt = require('mqtt');
const client = mqtt.connect();
client.subscribe('EVENT');
let eventSeq = ['CO', 'CF', 'DO', 'DF'];

client.on('message', function (topic, message) {
    let item = eventSeq[0];
    console.log('input: ' + message.toString());
    console.log('expected: ' + item);

    if(message.toString() == item){
        eventSeq.shift();
    }
    if(eventSeq.length == 0){
        client.publish('EVENT', 'LEAVE');
        eventSeq = ['CO', 'CF', 'DO', 'DF'];
    }
});

