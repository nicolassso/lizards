import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer.component';
import Content from '../../content/content.component';
import './homepage.styles.scss';
import backgroundVideo from '../../../videos/video-1.mp4'
import Video from '../../video/video.component';




const HomePage = () => (
        <div className='homepage'>
            <Navbar />

            {/* <video className='backgroundVideo' autoPlay loop muted src={backgroundVideo}/> */}
            <Video />

            <Content />

            <Footer />
        </div>
)

export default HomePage;