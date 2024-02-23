import React, { useState } from 'react';
import './Navbar.css'

import logo from '../../assets/brand.png'

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };

    return (
        <div className='navbar'>

            <div className='navLogo'>
                <img src={logo} alt="" className='logo' />
            </div>

            <div className='navContainer'>
                <div className='navItems'>

                    monday to friday 8.00am-8.00pm <br />
                    saturday & sunday 8.00am-6.00pm
                    <div className='navIcons'>
                        <FaInstagram className='icon' />
                        <FaXTwitter className='icon' />
                        <FaFacebookF className='icon' />
                        <MdOutlineMail className='icon' />
                    </div>
                    <div className='navBtn'>
                        <button className='itemBtn'>Login</button>
                        <button className='itemBtn'>Register</button>
                    </div>
                </div>


                <div className='navHeader'>
                    <ul className='navList'>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Home</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className='navLink'>Services</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className='navLink'>About us.</a>
                        </li>
                        
                        <li className='navItem'>
                            <a href="#" className='navLink'>Contacts</a>
                        </li>

                        <a href="#"><button className='btn'>Book Appointment</button></a>

                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Navbar;
