import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';
import Notification from './Notification.jsx';
const uuidv1 = require('uuid/v1');
var randomColor = require('randomcolor');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  usersOnline: "",
                  currentUser: {name: "Bob", fontcolor: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
                  messages: []
                  }

   this.handleUserChange = this.handleUserChange.bind(this);
   }

componentDidMount() {
  console.log("componentDidMount <App />");

  const ws = new WebSocket("ws:/localhost:3001");
  this.socket = ws;

  ws.onopen = (ev) => {
    console.log("Connected to server at 3001!");
  }

  ws.onmessage = (event) => {

  const newMessage = JSON.parse(event.data);

  let messages = this.state.messages;
  let usersOnline = this.state.usersOnline;
  let currentUser = this.state.currentUser;


    switch(newMessage.type) {
      case "setColor":
        this.setState({ currentUser: { name: this.state.currentUser.name, fontcolor: newMessage.fontcolor } });
      case "incomingMessage":
        this.setState({ messages: messages.concat(newMessage) });
        break;
      case "incomingNotification":
        this.setState({ messages: messages.concat(newMessage) });
        break;
      case "usersOnline":
        this.setState({ usersOnline: newMessage.content});
        break;
      default:
        console.log("this is an error - no type ");
    }
  }
}

componentWillUnmount() {
  exampleSocket.close();
}

handleMessage = (fromChatBar) => {

  const newMessage = {
    username: this.state.currentUser.name,
    fontcolor: this.state.currentUser.fontcolor,
    content: fromChatBar,
    type: "postMessage"
  }
  this.socket.send(JSON.stringify(newMessage));
}

handleUserChange(fromChatBar) {
  const username = this.state.currentUser.name;

  const newMessage = {
    content: "User " + username + " has changed their name to " + fromChatBar,
    type: "postNotification",
    name: fromChatBar
  }
  this.socket.send(JSON.stringify(newMessage));
  this.setState( { currentUser: {name: fromChatBar, fontcolor: this.state.currentUser.fontcolor } } )
  console.log("here is new state after user change", this.state.currentUser)
}


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
      <Navbar usersOnline={this.state.usersOnline} />
      <main className="messages">
      <MessageList messages={this.state.messages} />
      <Chatbar currentUser={this.state.currentUser.name} handleMessage={this.handleMessage}
      handleUserChange={this.handleUserChange} />
      </main>
      </div>
    );
  }
}
export default App;
