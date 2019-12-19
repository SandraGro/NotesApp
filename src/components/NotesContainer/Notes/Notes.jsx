import React from "react";
import { Card, Form } from "react-bootstrap";
import "./Notes.css"

function Notes(props) {
    const { description, removeNote, done, id, completed } = props;
    return (
        <Card className={`${completed && 'completed '}`}>
            <Card.Body> <Form.Check onChange={() => done(id)} aria-label="option 1" /> {description}
                <span id={props.id} onClick={() => removeNote(id)}> x</span></Card.Body>

        </Card>



    );
}
export default Notes;