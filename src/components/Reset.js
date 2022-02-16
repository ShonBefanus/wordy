import React from 'react';

const Reset = ({isActive, onClick}) => {
    return (
        <button
            className="ui right floated button  reset "
            style={{display: `${isActive} ? 'block': 'none'`}}
            onClick={onClick}
        >Reset
        </button>
    );
};

export default Reset;
