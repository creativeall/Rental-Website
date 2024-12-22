import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import logo from '../../images/rentLogo.png';
import { footer } from '../../data/Data';
import { useNavigate } from 'react-router-dom';
 
const Footer = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleContactClick = () => {
        navigate('/contact'); // Replace '/contact' with the route you want to navigate to
    };
    return (
        <>
            <section className='footerContact'>
                <div className='container'>
                    <div className='send flex'>
                        <div className='text'>
                            <h1>Do You Have Questions ?</h1>
                            <p>We'll help you to grow your business and growth.</p>
                        </div>
                        
                        <Button className='btn5' onClick={handleContactClick}>Contact Us</Button>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container'>
                    <div className='box1'>
                        <div className='logo'>
                            <img className='logoD' src={logo} alt='logo' />
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                            <div className='input flex'>
                                <input type='text' placeholder='Email Address' name='' id='' />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    {footer.map((val) => (
                        <div className='box'>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items) => (
                                    <li>{items.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <div className='legal'>
                <span>© 2024 Rental Shop. All rights reserved.</span>
            </div>
        </>
    )
}

export default Footer;