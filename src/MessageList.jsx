import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {

  console.log("Rendering <Message List/>");

  const renderedMessages = this.props.messages.map((message, index) => {
      return (
      <Message
        username={message.username}
        content={message.content}
        key={index}
      />
      )
    });

    return(
    <main className="messages">
    {renderedMessages}
    </main>
    )
  }

}
export default MessageList;