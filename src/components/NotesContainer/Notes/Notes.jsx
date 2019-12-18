import React from "react";

function Notes(props) {
    const { description, removeNote, done, id, completed } = props;
    return (
        <li className={`${completed && 'completed '}`}>
            <span onClick={()=>done(id)}> O </span>
            {description}
            <span id={props.id} onClick={()=>removeNote(id)}> x</span>
        </li>
    );
}
export default Notes;