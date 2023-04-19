var PROTO_PATH = __dirname + '/helloworld.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
    var client = new hello_proto.Greeter('localhost:50050',
        grpc.credentials.createInsecure());

    client.sayHello({name: 'Tom'}, function (err, response) {
        console.log('Greeting Response:', response.message);
    });

    client.add({x:2, y:3}, function (err, response) {
        console.log('Add Result:', response.result);
    })
}

main();
