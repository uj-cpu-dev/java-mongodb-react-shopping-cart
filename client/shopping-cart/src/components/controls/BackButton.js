import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
    return(
        <Link to={'/'} className={'back-button'}>
            <span> {`< Back`} </span>
        </Link>
    )
}

export default BackButton;