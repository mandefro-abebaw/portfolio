import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import  FacebookIcon  from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Mandefro</p>
            <div className="footer-social">
                <a href="#" className="footer-icon"><LinkedInIcon/></a>
                <a href="https://t.me/Siparia" className="footer-icon"><TelegramIcon/></a>
                <a href="https://twitter.com/manirmas6532new" className="footer-icon"><TwitterIcon/></a>
                <a href="https://github.com/mandefro-abebaw" className="footer-icon"><GitHubIcon/></a>
                <a href="https://www.facebook.com/mandefroabebaw2" className="footer-icon"><FacebookIcon/></a>
                <a href="https://www.instagram.com/mandefroabebaw/" className="footer-icon"><InstagramIcon/></a>
 
            </div>
            <p className='footer-copyright'>&#169; 2023 copyright all right reserved</p>
        </div>
    )
}

export default Footer
