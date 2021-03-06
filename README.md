Chatty App
=====================

A minimal and light Chat App using ReactJS on the front end, and Websockets and Express
on the back-end.

### Description

This app is a basic chat application:
- A user can set his or her "handle" on connection
- Connection is established easily simply by opening the browser and going to
  localhost:3000
- Upon changing handles, the chat app will notify all users that the user has
  changed usernames. See screenshot below.
- Upon connection, the app will also notify all users how many users are online
  in the upper right hand corner.  The number of users online and connected will
  update as new users connect and/or disconnet. See screenshot below.
- Each user is assigned a unique and randonly assigned color by the websocket server,
  and all of that user's messages will use that color as the fontcolor for their
  username. See screenshot below.
- Dependencies listed below and in the package.json file.

### Screenshots:

Here is the screenshot of a userscreeen at time of connection:
!["Screenshot 1"](https://github.com/brandonstranzl/react-simple-boilerplate/blob/master/docs/Connection%20Screenshot.png)

Here is a screenshot showing four users connected. Note the usercount in upper right-hand
corner, as well as the notifications that each user has chosen a username, as well as the
different fontcolors assigned to each username.
!["Screenshot 2"](https://github.com/brandonstranzl/react-simple-boilerplate/blob/master/docs/Four%20Users%20All%20Names%20Changed%20with%20Notifications%20and%20Messages.png)


Here is a screenshot showing the user count online decremented back to "1" after three
users disconnect.
!["Screenshot 3"](https://github.com/brandonstranzl/react-simple-boilerplate/blob/master/docs/Three%20Users%20Disconnected%20Showing%20Updated%20Users%20Online.png)

### Dependencies

  "devDependencies": {
    "babel-core": "6.23.1",
    "babel-loader": "6.3.1",
    "babel-preset-es2015": "6.22.0",
    "babel-preset-react": "6.23.0",
    "babel-preset-stage-0": "6.22.0",
    "css-loader": "0.26.1",
    "eslint": "3.15.0",
    "eslint-plugin-react": "6.9.0",
    "node-sass": "4.5.0",
    "sass-loader": "6.0.0",
    "sockjs-client": "^1.1.2",
    "style-loader": "0.13.1",
    "webpack": "2.2.1",
    "webpack-dev-server": "2.3.0"
  },
  "dependencies": {
    "express": "4.16.2",
    "randomcolor": "^0.5.3",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "uuid": "^3.2.1",
    "ws": "4.0.0"
  }

