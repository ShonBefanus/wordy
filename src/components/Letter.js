import React from 'react';

const Letter = ({letter,color,setActive}) =>{
const setColor = (color)=>{
    switch (color) {
        case 0:
            return 'black';
        case 1:
            return 'gold';
        case 2:
            return 'green';
    }
        return 'black';
};

    return (
         <span className="letter" onClick={(e)=>{
             e.preventDefault();
             setActive();
         }} style={{color:setColor(color)}}>
             {letter}
         </span>
    );
};

export default Letter;
