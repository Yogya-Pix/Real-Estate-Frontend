import React from 'react'
import './SignUpPage1.css'
import { ReactComponent as Google } from '../../assets/google.svg'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar'


function SignUpPage1() {
    return (
        <>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="signup-page-main-container">
                <h2>Sign Up</h2>
                <div className="SignUpPage1-container">
                    <div className="name-input">
                        <p>Enter Name</p>
                        <input type="text" />
                    </div>
                    <div className="email-input">
                        <p>Enter E-mail ID</p>
                        <input type="text" />
                    </div>
                    <div className="google-sign-in-option">
                        Sign Up using
                        <Google />
                    </div>
                </div>

                <div className='btm__nav'>
                    <div className='btm__nav-btn'>
                        Sign Up
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUpPage1
