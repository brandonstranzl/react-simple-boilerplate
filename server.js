var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const uuidv1 = require('uuid/v1');


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  })
  .listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });

  // server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

//   ws.on('message', function incoming(data) {
//     console.log('received:', data);
//   });

//   ws.send('something');
// });

  ws.on('message', function incoming(data) {
    console.log('received:', JSON.parse(data));
    let messageObj = JSON.parse(data);
    console.log(messageObj);
    messageObj.id = uuidv1();
    console.log(messageObj);
    messageObjJSON = JSON.stringify(messageObj);
    console.log(messageObjJSON);
    wss.clients.forEach(function each(client) {
      client.send(messageObjJSON);
    })
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
