import React from 'react';
const WordItem =({word, selectedWord, color = ''}) => {
    const onWordClick = (e)=>{
        selectedWord(word);
    };
    return (
            <button className={`ui ${color} button searchWord`} onClick={onWordClick}>
                <p>{word}</p>
            </button>
        );
};
export default WordItem;
