import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Tinh khuc nhac xua",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/3/5/f/335fd454479984639775bed29d9549f1.jpg",
        },
        {
            id: 2,
            name: "Lofi Chill",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/3/5/f/335fd454479984639775bed29d9549f1.jpg",
        }, {
            id: 3,
            name: "Nhac cu",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/3/5/f/335fd454479984639775bed29d9549f1.jpg",
        },
    ];
    return (
        <div>
            <h3>To Do List</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;