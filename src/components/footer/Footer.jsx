import React from 'react';
import './Footer.css'
// import video from '../../assets/teethed-braces.mp4'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footerDiv'>
                {/* <video src={video} loop autoPlay muted type='video/mp4'></video> */}
            </div>
            
            <div className='footerContent container'>
                <div className='footerDiv'>     
                </div>

                <div className='footerCard'>
                    <div className='footerIntro'>
                        <div className='footerText'>
                            <p>You are most welcome to our clinic for infinite smiles</p>
                        </div>
                    </div>

                    <div className='footerItems grid'>
                        {/* Ist batch */}
                        <div className='footerLinks'>
                            <h1 className='linkTitle'>Links</h1>
                            <a href=""><li>Home</li></a>
                            <a href=""><li>Services</li></a>
                            <a href=""><li>Contacts</li></a>
                            <a href=""><li>Patients</li></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
