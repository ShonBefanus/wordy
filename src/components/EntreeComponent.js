import React from 'react';
import EraseButton from './EraseButton';
import EntreeWord from './EntreeWord';
import BookmarkButton from './BookmarkButton';

const EntreeComponent = ({entries, deleteEntree, onFavoriteClick, setActive}) => {
    const entree = entries.map((e, index) => {

        return (
            <div key={e.word} className="column">
                <div className="ui  one column grid">
                    <div className="column" key={`entree_${index}`}>
                        <EntreeWord
                            word={e.word}
                            hint={e.hint}
                            setActive={(letter) => { setActive(index, letter);}}
                        />
                        <span className="trash"

                        >
                        <EraseButton
                            onClick={() => {deleteEntree(index)}}
                            display={['inline-block', 'block']}

                        />
                        <BookmarkButton
                            isActive={e.isFavorite}
                            onClick={() => onFavoriteClick(index)}
                        />
                    </span>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="ui list">
            {entree}
        </div>
    );
};

export default EntreeComponent;
