import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  render() {

  console.log("Rendering <Message List/>");

  const renderedMessages = this.props.messages.map((message, id) => {
      // switch (message.type) {
      //   case 'incomingNotification':
      //   return <Notification />
      //   default:
      //   return <Message
      //   username={message.username}
      //   content={message.content}
      //   messageid={message.id}
      //   key={message.id}/>
      // }
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
        key={message.id}
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