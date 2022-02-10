import React from 'react';
import Trash from './Trash';
import EntreeWord from './EntreeWord';

const EntreeComponent = ({entries, deleteEntree, setActive}) =>{
    const entree = entries.map((e, index) => {
        const onDeleteEntree = (id) => {
            deleteEntree(id);
        };
        const onSetModalVisible = (flag) => {

        };

        return (
            <div className="item" key={`entree_${index}`}>
                    <EntreeWord word={e.word} hint={e.hint} setActive={(letter)=>{
                        setActive(index, letter);
                    }}/>
                    <span className="trash">
                        <Trash
                            display={['inline-block', 'block']}
                            onClick={() => {
                                onDeleteEntree(index);
                                onSetModalVisible(true);
                            }}
                        />
                    </span>
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
