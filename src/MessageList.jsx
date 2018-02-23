import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  render() {

  const renderedMessages = this.props.messages.map((message, index) => {
        console.log(message)
      return (
        message.type === 'incomingNotification' ?
        <Notification
        content={message.content}
        key={message.id}
         />
        : <Message
        username={message.username}
        content={message.content}
        messageid={message.id}
        key={index}
        fontcolor={message.fontcolor}
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