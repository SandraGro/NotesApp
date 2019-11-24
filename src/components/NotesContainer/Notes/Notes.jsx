import React from "react";

export default (props) => {
    const {description, removeNote} = props;
    return(
        <li className="note">
            {description}
            <span onClick = {removeNote}> x</span>
        </li>
    );

} ;