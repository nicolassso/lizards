import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer.component';
import Content from '../../content/content.component';
import './homepage.styles.scss';
// import Video from '../../video/video.component';
import Directory from '../../directory/directory.component';




const HomePage = () => (
        <div className='homepage'>
            {/* <Video /> */}
            <Navbar />
            <Directory />
            <Footer />

        </div>
)

export default HomePage;