import React from 'react';
import WordItem from './WordItem';


const SearchedWord = ({words, selectedWord, weight, isGameMode}) => {
    const color = (word) =>{
        const w = weight[word];
        if(w>800) return 'green';
        if(w>500) return 'violet';
        if(w>300) return 'purple';
        if(w>200) return 'teal';
        if(w>50) return 'brown';
        return 'lightgrey';
    };

    const renderList = words.slice(0,500).map((word, index) => {
        return <WordItem color={color(word)} weight={weight[word]}
            selectedWord={selectedWord}
            key={`suggestion_${index}`} word={word}
        />
    });
    return (
        <div className="column">
            <div className="ui left aligned container">
                <div className="column">
                    {words.length === 0 ? <div style={{float:'left'}}>No results</div> :renderList}
                </div>
            </div>
        </div>
    );
};

export default SearchedWord;
