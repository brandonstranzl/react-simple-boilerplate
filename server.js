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
    messageObj.id = uuidv1();

    // const commandData = message.content.match(/^\/giphy\s+(\w.*)$/)
    // // if (commandData) {
    //   const qs = querystring.stringify({
    //     api_key:
    //     tag: commandData[1]
    //   })
    // }
    // const url = 'https://api.giphy.com/v1/gifs/random?{qs}'

    // fetch(url)
    //   .then( resp => {
    //     if (resp.ok)   {
    //       return resp.json()
    //     }
    //     throw new Error('invalid format')
    //   })
    //   .then

    // message.content = commandData[1]
    let message = ""

    switch(messageObj.type) {
      case "postMessage":
        messageObj.type = "incomingMessage";
        message = JSON.stringify(messageObj);
        break;
      case "postNotification":
        messageObj.type = 'incomingNotification';
        message = JSON.stringify(messageObj);
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + data.type);
    }
    wss.clients.forEach(function each(client) {
      client.send(message);
    })


  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
