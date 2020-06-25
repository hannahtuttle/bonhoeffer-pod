import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {

    return(
        <div>
            <ReactPlayer
                url = {props.podcast}
            />
        </div>
    )
}

export default Player;