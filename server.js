var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: process.env.PORT || 3000});
wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('received: %s', message);
    ws.send("Back");
  });
  ws.send('something');

  var intervalID = setInterval(function() {
    var d = Date.now()
    ws.send(`hello from the server -- ${d}`);
  }, 1000);

  ws.on("close", function() {
    clearInterval(intervalID);
  });
});


