import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Notification />");

    return (
      <div className="message-system">
      {this.props.content}
      </div>
    );
  }
}
export default Message;