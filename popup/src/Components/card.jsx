import React from "react";

function Card(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <button className="btn btn-success" onClick={() => props.open(props.title, props.desc)}>More Info</button>
        </div>
    );
}

export default Card;