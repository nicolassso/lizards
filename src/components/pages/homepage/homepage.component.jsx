import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/footer.component';
import './homepage.styles.scss';
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