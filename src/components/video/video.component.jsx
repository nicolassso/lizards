import React from 'react'
import './video.styles.scss'
import backgroundVideo from '../../videos/video-1.mp4'

const Video = () => (
   
        <div className="video">

        <video className='backgroundVideo' autoPlay loop muted src={backgroundVideo}/>


            <h1 className='video-text'>Reach for the stars...</h1>
        </div>

)

export default Video;