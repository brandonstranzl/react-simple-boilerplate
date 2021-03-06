import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    // console.log("Rendering <Navbar/>");
    return (
      <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span className="navbar-usercount">{this.props.usersOnline}</span>
      </nav>
    );
  }
}
export default Navbar;