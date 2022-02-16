import React from 'react';
const WordItem =({word, selectedWord}) => {
    const onWordClick = (e)=>{
        selectedWord(word);
    };
    return (
            <button className="ui button searchWord" onClick={onWordClick}>
                <p>{word}</p>
            </button>
        );
};
export default WordItem;
