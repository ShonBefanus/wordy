import React from 'react';

const Trash = ({onClick, isActive}) => {
    const {title, icon} = isActive? {
      title: 'Remove from default',
      icon: 'trash'
    }: {
        title: 'Add as default word',
        icon: 'save'
    };
    return (
        <button className="ui button" title={title} onClick={onClick}>
            <i className={`${icon} icon`}/>
        </button>
    )
};
export default Trash;
