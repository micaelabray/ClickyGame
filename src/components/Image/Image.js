import React from 'react'
import "./style.css"

function Image(props) {
    return (
        <div className="clickableImage">
            <img alt={props.name} src={props.gameImages} onClick={props.handleClick} id={props.id} />
        </div>
    );
}

export default Image
