import React, { Component } from "react";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 1, description: 'hala' },
        { id: 2, description: 'hala2' },
      ]
    }
  }
  render() {
    return (
      <ul>{
        this.state.notes.map(note => {
          return (
            <li>{note.description}</li>
          )
        })
      }
      </ul>
    );
  }
}

export default Container;
