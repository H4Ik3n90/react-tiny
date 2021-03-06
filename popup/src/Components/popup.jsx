import React from 'react';

function Popup(props) {
    return(
        <div className='text-center bg-light w-25 vh-25'>
            <p className='position-absolute' onClick={props.close}>X</p>
            <h2>{props.title}</h2><br/>
            <h2>{props.desc}</h2>
        </div>
    );
}

export default Popup;