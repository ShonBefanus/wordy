import React from 'react';

const EraseButton = ({onClick}) => {
    return (
        <button className="ui  button" title="Remove word" onClick={onClick}>
            <i className="eraser brown icon"/>
        </button>
    );
};

export default EraseButton;
