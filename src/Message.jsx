import React, {Component} from 'react';

class Message extends Component {
  render() {
    // console.log("Rendering <Message/>");
    const spanStyle = {
    color: this.props.fontcolor
    }

    return (
      <div className="message">
      <span className="message-username" style={spanStyle}>{this.props.username}</span>
      <span className="message-content">{this.props.content}</span>
      </div>
      );
  }
}
export default Message;