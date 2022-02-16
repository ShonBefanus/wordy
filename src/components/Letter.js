import React from 'react';

const Letter = ({letter, color, setActive}) => {
    const setColor = (color) => {
        switch (color) {
            case 0:
                return 'black';
            case 1:
                return 'gold';
            case 2:
                return '#02f702';
        }
        return 'black';
    };
    const onClick = (event) => {
        event.preventDefault();
        setActive()
    };
    const setCss = () => {
        return {color: setColor(color)};
    };
    return (
        <button
            className="ui button letter"
            onClick={onClick}
            style={setCss()}
        >
             {letter}
        </button>
    );
};

export default Letter;
