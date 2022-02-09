import React from 'react';
import WordItem from './WordItem';

const ListWord = ({words}) => {
    const renderList = words.map((word) => {
        return <WordItem
            selectedWord={this.selectedWord}
            key={word} word={word}
        />
    });
    return (
        <div>
            {renderList}
        </div>
    );
};

export default ListWord;
