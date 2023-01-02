import React from 'react';
import "./FooterStyles.css";

function Footer(){
    return(
        <div className="footer-container">
        <footer className='footer'>© {new Date().getFullYear()} All Rights Reserved. Made with ❤ by Dharmesh</footer>
        </div>
    )
}

export default Footer;