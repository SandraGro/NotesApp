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
        { description: 'hala', completed: false },
      ]
    }
  }

  addNote() {
    const { notes } = this.state;
    let newNotes = [...notes];
    newNotes.push({ description: this.state.currentNote, completed: false })
    console.log(newNotes);
    this.setState({ notes: newNotes, currentNote: '' })
    this.inputRef.focus();
  }

  removeNote(id) {
    const { notes } = this.state;
    let newNotes = [...notes];
    newNotes.splice(id, 1)
    this.setState({ notes: newNotes })
  }

  done(id) {
    const { notes } = this.state;
    let newNotes = [...notes];
    newNotes[id].completed = !newNotes[id].completed
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
            this.state.notes.map((note, index) => {
              return (
                <Notes description={note.description} id={index} completed={note.completed} removeNote={this.removeNote} done={this.done} />
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
