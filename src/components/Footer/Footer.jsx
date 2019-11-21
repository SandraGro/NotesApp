import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.addNote = this.addNote.bind(this);
  }
  addNote() {
    console.log(this.container);
  }
  render() {
    return (
      <footer>
        <div className="container">
          <input ref={input => { this.container = input }} placeholder="Write a note"></input>
          <button onClick={this.addNote}>Add</button>
        </div>
      </footer>
    );
  }
}




export default Footer;

