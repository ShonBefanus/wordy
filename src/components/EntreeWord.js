import React from 'react';
import Letter from './Letter';

const EntreeWord = ({word, hint, setActive}) =>{

    const letter = word.split('').map((l,index)=>
       <Letter key={`entree_${index}`} color={hint[index]} letter={l} setActive={()=>{
           setActive(index);}}/>
    );
    return (
        <span className="entree-word">
            {letter}
        </span>
    );
};

export default EntreeWord;
