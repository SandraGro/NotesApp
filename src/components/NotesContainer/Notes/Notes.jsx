import React from "react";

function Notes(props) {
    const { description, removeNote } = props;
    return (
        <li className="note">
            {description}
            <span id={props.id} onClick={removeNote}> x</span>
        </li>
    );
}
export default Notes;