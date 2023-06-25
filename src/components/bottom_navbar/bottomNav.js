import React from 'react'
import './bottomNav.css'
import { Link } from 'react-router-dom'

function BottomNav() {
    return (
        <div className='btm__nav'>
            <Link to='property'>
                <div className='btm__nav-btn'>Search Properties</div>
            </Link>
            <Link >
                <div className='btm__nav-btn'>Explore in VR</div>
            </Link>
            <Link to='/AboutUs'>
                <div className='btm__nav-btn'>Who We Are</div>
            </Link>
            <Link>
                <div className='btm__nav-btn'>List your Property</div>
            </Link>
        </div>
    )
}

export default BottomNav
