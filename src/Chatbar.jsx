import React, {Component} from 'react';

class Chatbar extends Component {

  handleUsername = (event) => {
    this.props.handleUserChange(event.target.value);
  }

  handleMessageKeyPress = (event) => {
  if(event.key === 'Enter' || event.key === 'Tab' ) {
      this.props.handleMessage(event.target.value)
      event.target.value = " ";
    }
  }

  render() {
    console.log("Rendering <Chatbar/>");

    return (
      <footer className="chatbar">

      <input name="username" className="chatbar-username"
      placeholder="Type a username and hit ENTER"
      onBlur={this.handleUsername} />

      <input name="message" className="chatbar-message"
      placeholder="Type a message and hit ENTER"
      onKeyPress={this.handleMessageKeyPress}/>
      </footer>
    );
  }
}
export default Chatbar;