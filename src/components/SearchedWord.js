import React from 'react';
import WordItem from './WordItem';
import {v4 as uuidv4} from 'uuid';

const SearchedWord = ({words, selectedWord}) => {
    const renderList = words.map((word, index) => {
        return <WordItem
            selectedWord={selectedWord}
            key={`suggestion_${index}`} word={word}
        />
    });
    return (
        <div className="column">
            <div className="ui right aligned container">
                <div className="column">
                    {renderList}
                </div>
            </div>
        </div>
    );
};

export default SearchedWord;
