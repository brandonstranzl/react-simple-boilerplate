import React, {Component} from 'react';

class Chatbar extends Component {

  onKeyPress = (event) => {
  if(event.key === 'Enter') {
    console.log(event.target.name);
    if (event.target.name === 'username') {
    this.props.handleUserChange(event.target.value);
    }
    if (event.target.name === 'message') {
      this.props.handleMessage(event.target.value)
      event.target.value = " ";
    }
  }
}

  render() {
    console.log("Rendering <Chatbar/>");

    return (
      <footer className="chatbar">

      <input name="username" className="chatbar-username"
      placeholder="Type a username and hit ENTER"
      onKeyPress={this.onKeyPress} />

      <input name="message" className="chatbar-message"
      placeholder="Type a message and hit ENTER"
      onKeyPress={this.onKeyPress}/>
      </footer>
    );
  }
}
export default Chatbar;