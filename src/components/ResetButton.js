import React from 'react';

const ResetButton = ({isActive, onClick}) => {
    return (
        <button
            className={`ui inverted brown right floated button  ${isActive? 'active':'disabled'}  reset `}
            style={{display: `${isActive} ? 'block': 'none'`}}
            onClick={onClick}
        >Reset
        </button>
    );
};

export default ResetButton;
