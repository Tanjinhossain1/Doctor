import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </footer>
            <div className='mb-6'>
                <p className='text-center'>Copyright <span className='text-xl'>©</span> {year} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;