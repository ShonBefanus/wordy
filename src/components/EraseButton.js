import React from 'react';

const EraseButton = ({onClick}) => {
    return (
        <button className="ui button" title="Remove word" onClick={onClick}>
            <i className="eraser icon"/>
        </button>
    );
};

export default EraseButton;
