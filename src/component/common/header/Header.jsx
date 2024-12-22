import React from 'react';
import logo from '../../images/rentLogo1.png';
import { Link } from 'react-router-dom';
import { nav } from '../../data/Data';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate(); // Initialize navigate
    
        const handleContactClick = () => {
            navigate('/register'); // Replace '/contact' with the route you want to navigate to
        };
    return (
        <header>
            <div className="container flex">
                {/* Logo Section */}
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>
                
                {/* Navigation Section */}
                <nav className="nav">
                    <ul className="flex">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Sign In Button */}
                <div className="button">
                    <button className="btn btn-primary flex align-center" onClick={handleContactClick}>
                        <LogoutIcon style={{ marginRight: '8px' }} />
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
