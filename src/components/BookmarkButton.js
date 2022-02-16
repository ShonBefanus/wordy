import React from 'react';

const BookmarkButton = ({onClick, isActive}) => {
    const {title, icon} = isActive? {
      title: 'Remove from default',
      icon: 'bookmark'
    }: {
        title: 'Add as default word',
        icon: 'bookmark outline'
    };
    return (
        <button className="ui   button " title={title} onClick={onClick}>
            <i className={`${icon}  brown icon`}/>
        </button>
    )
};
export default BookmarkButton;
