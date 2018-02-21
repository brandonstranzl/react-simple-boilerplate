import React, {Component} from 'react';

class Chatbar extends Component {
  onKeyPress = (event) => {
  if(event.key === 'Enter') {
    this.props.handleMessage(event.target.value)
    console.log("here is the click", event.target.value)
    event.target.value = " ";
  }
}

  render() {
    console.log("Rendering <Chatbar/>");

    return (
      <footer className="chatbar">
      <input className="chatbar-username" placeholder={this.props.currentUser} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER"
      onKeyPress={this.onKeyPress}/>
      </footer>
    );
  }
}
export default Chatbar;