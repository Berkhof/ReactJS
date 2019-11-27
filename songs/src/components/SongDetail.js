import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <br />
            <p>Title: {song.title}</p>
            Duration:{song.duration}
        </div>
    )
};

const mapStatetoProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStatetoProps)(SongDetail);
