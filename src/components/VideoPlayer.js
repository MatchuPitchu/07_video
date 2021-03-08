import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ( {url, onProgress } ) => {
    return (
        <div className='container'>    
            <div className='player-wrapper'>
                <video controls>
                    <source src='../assets/Foto auf Plattform 2.mov' type="video/mov" />
                    <p>Video cannot be loaded</p>
                </video>
                <div className="controls">
                    <button className="play" aria-label="play pause toggle"></button>
                    <button className="stop" aria-label="stop"></button>
                    <div class='timer'>
                        <div></div>
                        <span aria-label='timer'>00:00</span>
                    </div>
                    <button className="rwd" aria-label="rewind"></button>
                    <button className="fwd" aria-label="fast forward"></button>
                </div>
            </div>
            <hr style={{backgroundColor: 'white'}}/>
            {/* Version ReactPlayer */}
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={url}
                    width='100%'
                    height='100%'
                    controls={true}
                    onProgress={onProgress}
                />
            </div>
        </div>
    )
}

export default VideoPlayer;