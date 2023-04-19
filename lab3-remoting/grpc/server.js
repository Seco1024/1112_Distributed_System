var PROTO_PATH = __dirname + "/helloworld.proto";

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
  callback(null, { message: "Hello " + call.request.name });
}

function add(call, callback) {
  callback(null, {result: call.request.x + call.request.y});
}

function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, { sayHello: sayHello, Add:add});

  server.bindAsync(
    "0.0.0.0:50050",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();