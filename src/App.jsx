import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
                  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
                  messages: [
                    {
                      username: "Bob",
                      content: "Has anyone seen my marbles?",
                    },
                    {
                      username: "Anonymous",
                      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                    }
                  ]
                  }
   }

componentDidMount() {
  console.log("componentDidMount <App />");

  const ws = new WebSocket("ws:/localhost:3001");
  this.socket = ws;

  ws.onopen = function(ev) {
  console.log("Connected to server at 3001!");
  // ws.send("Here's some text that the server is urgently awaiting!");
  }

  // ws.onopen = function (event) {
  // ws.send("Here's some text that the server is urgently awaiting!");
  // };
  console.log(this)

  ws.onmessage = (event) => {
  console.log(this)

    // Parse the message data into a JavaScript object using JSON.parse()
    const newMessage = JSON.parse(event.data);

    // concat the message to the list of messages in our state
    let messages = this.state.messages;
    this.setState({ messages: messages.concat(newMessage) });
  }

  setTimeout(() => {
    console.log("Simulating incoming message");

    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)

    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

componentWillUnmount() {
  exampleSocket.close();
}

handleMessage = (fromChatBar) => {

  const newMessage = {
    username: this.state.currentUser.name,
    content: fromChatBar
  }

  this.socket.send(JSON.stringify(newMessage));

  // let messages = this.state.messages
  // this.setState({messages: messages.concat(newMessage)})
  // console.log(messages)
}


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
      <Navbar />
      <main className="messages">
      <MessageList messages={this.state.messages} />
      <Message />
      <Chatbar currentUser={this.state.currentUser.name} handleMessage={this.handleMessage} />
      </main>
      </div>
    );
  }
}
export default App;
