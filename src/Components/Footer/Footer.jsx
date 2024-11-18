import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Raj Fashion</p>
        </div>
        <ul className="footer-links">
            <li><a href="https://maps.app.goo.gl/CBm7K16gaa9vDnk5A">Company</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="https://maps.app.goo.gl/CBm7K16gaa9vDnk5A">Offices</a></li>
            <li><a href="https://www.google.co.in/maps/place/Raj+Fashion/@29.7100663,75.8990327,17z/data=!4m16!1m8!3m7!1s0x3911994975db6673:0xee0f8c903867c7c5!2sRaj+Fashion!8m2!3d29.7100626!4d75.8990555!10e5!16s%2Fg%2F11h7tdnp6l!3m6!1s0x3911994975db6673:0xee0f8c903867c7c5!8m2!3d29.7100626!4d75.8990555!10e1!16s%2Fg%2F11h7tdnp6l?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">About</a></li>
            <li><a href="mailto:hardikgarg987@gmail.com?subject=Inquiry&body=Hello, I would like more information about your products and services.">Contact</a></li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://instagram.com" target="_blank"  rel="noreferrer">
                    <img src={instagram_icon} alt="Instagram"/>
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://pinterest.com" target="_blank"  rel="noreferrer">
                    <img src={pintester_icon} alt="Pinterest"/>
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://whatsapp.com" target="_blank"  rel="noreferrer">
                    <img src={whatsapp_icon} alt="WhatsApp"/>
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer