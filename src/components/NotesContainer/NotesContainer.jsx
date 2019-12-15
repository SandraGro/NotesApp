import React, { Component } from "react";
import Notes from "./Notes";

class Container extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      currentNote: '',
      notes: [
        { id: 1, description: 'hala' },
        { id: 2, description: 'hala2' },
      ]
    }
  }
  addNote() {
    const { notes } = this.state;
    let newNotes = [...notes];
    newNotes.push({ id: notes.length + 1, description: this.state.currentNote })
    this.setState({ notes: newNotes, currentNote: '' })
    this.inputRef.focus();
  }

  removeNote(id) {
    const { notes } = this.state;
    let newNotes = [...notes];
    var filtered = newNotes.filter(function (elemento_a_comparar) {
      console.log(elemento_a_comparar['id'], id.target.id);
      return elemento_a_comparar['id'] != id.target.id;
    });
    this.setState({notes: filtered})
    console.log(filtered);
  }

  // done(){
  //   const { notes } = this.state;
  //   let newNotes = [...notes];
    
  // }

  handleInputChange(event) {
    this.setState({
      currentNote: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <ul>{
          this.state.notes.map(note => {
            return (
              <Notes description={note.description} id={note.id} removeNote={this.removeNote} />
            )
          })
        }
        </ul>
        <input ref={input => { this.inputRef = input }} value={this.state.currentNote} placeholder="Write a note" onChange={this.handleInputChange}></input>
        <button onClick={this.addNote}>Add</button>
      </div>
    );
  }
}

export default Container;