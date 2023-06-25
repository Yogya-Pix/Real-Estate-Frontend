import React from 'react'
import '../styles/NavbarStyle.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <div className='nav_container'>
                <div className='navbar'>
                    <div className='left'>
                    <Link to={'/'} className='homepagelink'>
                        <svg width="45" height="45" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0418 48.9163C37.7212 48.9163 48 38.6376 48 25.9582C48 13.2787 37.7212 3 25.0418 3C12.3623 3 2.08362 13.2787 2.08362 25.9582C2.08362 38.6376 12.3623 48.9163 25.0418 48.9163Z" stroke={props.mode} strokeWidth="4.13074" strokeMiterlimit="10" />
                            <path d="M16.3116 22.0888V35.3836C16.3116 36.2087 16.6393 37 17.2228 37.5834C17.8062 38.1669 18.5975 38.4946 19.4226 38.4946H30.6609C31.4861 38.4946 32.2774 38.1669 32.8608 37.5834C33.4442 37 33.772 36.2087 33.772 35.3836V22.0888L25.0418 13.4216L16.3116 22.0888Z" fill={props.mode} />
                            <path d="M25.7895 10.0347L38.0405 23.908C38.2107 24.1002 38.3007 24.3503 38.2923 24.6068C38.2839 24.8634 38.1776 25.107 37.9952 25.2877L37.1712 26.1064C37.0749 26.2018 36.9606 26.2771 36.8348 26.3279C36.7091 26.3786 36.5746 26.4038 36.439 26.402C36.3034 26.4002 36.1696 26.3713 36.0453 26.3172C35.921 26.2631 35.8087 26.1848 35.715 26.0868L25.8083 15.6954C25.7131 15.5958 25.5987 15.5165 25.4721 15.4624C25.3454 15.4082 25.2091 15.3802 25.0714 15.3801C24.9336 15.38 24.7973 15.4078 24.6706 15.4618C24.5438 15.5157 24.4293 15.5948 24.334 15.6943L14.4431 26.0372C14.3454 26.1391 14.2277 26.2196 14.0973 26.2736C13.967 26.3277 13.8268 26.3541 13.6857 26.3512C13.5447 26.3483 13.4057 26.3162 13.2776 26.2569C13.1496 26.1976 13.0352 26.1124 12.9418 26.0066L11.8702 24.7899C11.7055 24.6033 11.616 24.3622 11.6189 24.1133C11.6218 23.8644 11.717 23.6255 11.886 23.4428L24.2768 10.0181C24.3736 9.91357 24.4912 9.83043 24.6221 9.77408C24.753 9.71773 24.8943 9.68942 25.0368 9.69098C25.1793 9.69253 25.3199 9.72392 25.4495 9.78311C25.5792 9.84231 25.695 9.928 25.7895 10.0347Z" fill={props.mode} />
                        </svg>
                        <p style={{ color: props.mode }}>Step Into Home</p>
                    </Link>
                    </div>
                    <div className='right'>
                        <p style={{ color: props.mode }}>Contact Us</p>
                        <Link to={'/property'}>
                        <button className='btn-search' style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white' }}>Search Properties</button>
                        </Link>
                        {/* <Link to={'/profile'}> */}
                        <div className='two_lines'>
                            <svg width="28" height="4" className='upperlinesvg' viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="4" rx="2" fill={props.mode} />
                            </svg>
                            <svg width="28" height="4" viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="4" rx="2" fill={props.mode} />
                            </svg>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
