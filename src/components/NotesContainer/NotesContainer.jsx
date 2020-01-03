import React, { Component } from "react";
import Notes from "./Notes";
import { Card, Form, Col, Row } from "react-bootstrap";
import "./NotesContainer.css"


class Container extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.done = this.done.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      currentNote: '',
      notes: [
        { id: 0, description: 'hala', completed: false },
      ],
      lastId: 0
    }
  }
  addNote() {
    const { notes, lastId } = this.state;
    let currentId = lastId + 1;
    let newNotes = [...notes];
    newNotes.push({ id: currentId, description: this.state.currentNote, completed: false })
    console.log(newNotes);
    this.setState({ notes: newNotes, currentNote: '', lastId: currentId })
    this.inputRef.focus();
  }

  removeNote(id) {
    const { notes } = this.state;
    let newNotes = [...notes];
    // let filtered;
    // for (let i = 0; i < notes.length; i++) {
    //   if (newNotes[i].id == id) {
    //     console.log('removing');
    //     filtered = newNotes.splice(i, 1);
    //   }
    //   this.setState({ notes: filtered })
    // }
    let filtered = newNotes.filter(function (elemento_a_comparar) {
      console.log(elemento_a_comparar['id'], id);
      return elemento_a_comparar['id'] !== id;
    });
    this.setState({ notes: filtered })
    console.log(filtered);
  }

  done(id) {
    const { notes } = this.state;
    let newNotes = [...notes];

    for (let i in newNotes) {
      if (id === newNotes[i].id) {
        newNotes[i].completed = !newNotes[i].completed
        // console.log(newNotes[i].completed);
      }
    }
    this.setState({ notes: newNotes });
  }

  handleInputChange(event) {
    this.setState({
      currentNote: event.target.value
    })
  }

  render() {
    return (
      <Card className="notes-container">
        <Card.Body>
          <ul className="notes-list">{
            this.state.notes.map(note => {
              return (
                <Notes description={note.description} id={note.id} completed={note.completed} removeNote={this.removeNote} done={this.done} />
              )
            })
          }
          </ul>
          <div className="input-container">
            <Row>
              <Col lg={11}>
                <Form.Control type="text" className="input-new-note" ref={input => { this.inputRef = input }} value={this.state.currentNote} placeholder="Write a note" onChange={this.handleInputChange} />
              </Col>
              <Col lg={1}>
                <i class="fas fa-plus fa-lg plus-button" onClick={this.addNote}></i>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Container;
