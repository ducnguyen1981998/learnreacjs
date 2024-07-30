import React from 'react';
import PropTypes from 'prop-types';

import "./styles.scss"

Album.propTypes = {
    album: PropTypes.object.isRequired
};

Album.deafaultProps = {
    album: []
}

function Album(props) {
    const { } = props;
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img
                    src={props.album.thumbnailUrl}
                    alt={props.album.name}
                // style={{ height: "10vmin", width: "10vmin" }}
                />
            </div>
            <p className="album__name"> {props.album.name}</p>
        </div>
    );
}

export default Album;