import React from 'react';
const WordItem =({word, selectedWord}) => {
    const onWordClick = (e)=>{
        selectedWord(word);
    };
    return (
            <div className="item" onClick={onWordClick}>
                {word}
            </div>
        );
};
export default WordItem;
