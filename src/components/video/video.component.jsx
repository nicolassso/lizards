import React from 'react'
import './video.styles.scss'
import backgroundVideo from '../../videos/world.mp4'

const Video = () => (


        <div className="video">

        <video className='backgroundVideo' 
        autoPlay 
        loop 
        muted 
        src={backgroundVideo}
        />

        </div>



)

export default Video;