import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

import Album from "../Album";

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.deafaultProps = {
    albumList: []
}

function AlbumList(props) {
    const { } = props;
    return (
        <ul className='album-list'>
            {
                props.albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;