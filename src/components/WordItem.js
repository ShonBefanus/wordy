import React from 'react';
const WordItem =({word, selectedWord, weight, color = ''}) => {
    const onWordClick = (e)=>{
        selectedWord(word);
    };
    return (
            <button className={`ui ${color} button searchWord`} title={`Weight : ${weight}`}  onClick={onWordClick}>
                <p>{word}</p>
            </button>
        );
};
export default WordItem;
