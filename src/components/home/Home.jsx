import React from 'react';
import './Home.css'
import Footer from '../footer/Footer';
// import { FaChevronRight } from "react-icons/fa6";

import video from '../../assets/dental-equipments.mp4'

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay'></div>
            <video src={video} muted autoPlay loop type='video/mp4'></video>

            <div className='homeContent container'>
                <div className='homeText'>

                    <h1 className='home Title'>Enamel Dental Care</h1>

                    <p className='homeDesc'><b>Enamel Dental Clinic, where your smile and beauty is our priority.
                        We are passionate team of dental professionals dedicated <br />to providing personalized dental care
                        to help you achieve and maintain the vibrant, radiant smile you deserve</b>
                    </p>

                    <div className='homeCards grid'>
                        <div className='card'>
                            <h1 className='cardTitle'>Our Mission</h1>
                            <p className='cardDesc'>We are devoted to building life-long relationships with patients to serve all their oral healthcare needs.
                                To use the latest technology and techniques to efficiently restore patients dental function, aesthetics,
                                and overall health in a comfortabe setting, improving confidence and quality of life
                            </p>
                        </div>
                        <div className='card'>
                            <h1 className='cardTitle'>Services</h1>
                            <ul>
                                <li>General Dentisry</li>
                                <li>Cosmetic Dentisry</li>
                                <li>Restorative Dentisry</li>
                                <li>Pediatric Dentisry</li>
                                <li>Oral Surgery</li>
                            </ul>
                        </div>
                        <div className='card'>
                            <h1 className='cardTitle'>Services</h1>
                            <ul>
                                <li>Orthodontics</li>
                                <li>Periodontics</li>
                                <li>Endodontics</li>
                                <li>Oral Pathology</li>
                                <li>Radioogy & Imaging</li>
                            </ul>
                        </div>
                        <div className='card'>
                            <h1 className='cardTitle'>Our Vision</h1>
                            <p className='cardDesc'>To become the highly renowned dental care provider innthe community, focused on delivering unparalleled patient experience.
                                To continuously innovate best practices by continuously educating our staffand adopting advanced dental technologies.
                                To set the exemplary starndard for modern dentistry based on excellence in oral rehabilitation, disease prevention, and overall patient health and wellbeing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='homeCard'>
                    <div className='homeInput'></div>
                </div>
            </div>
        </div>

        
    );
}

export default Home;
