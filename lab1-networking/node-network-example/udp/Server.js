const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    const message = Buffer.from(`${rinfo.port}: ${msg}`);
    server.send(message, rinfo.port, 'localhost', (err) => {
        if (err){
        console.log(err);
        } else {
            server.close();
        }
    });
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(20213, 'localhost');