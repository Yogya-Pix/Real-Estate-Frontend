import React from 'react'
import './ProfilePage.css'
import profilepic from '../../assets/mech1.png'
import lang from '../../assets/lang.png'
import downArrow from '../../assets/downArrow.png'
import close from '../../assets/close.png'

function ProfilePage() {
  return (
    <>
    <div className="profile-container-close-btn">
        <img src={close} alt="" />
    </div>
    <div className="super-parent-profile-container">
      <div className="parent-profile-container">
        <div className="profile-row">
            <div className="profile-pic profile-row-items">
                <img src={profilepic} alt="" />
            </div>
            <div className="profile-name profile-row-items">
                <p>John Doe</p>
            </div>
        </div>
        <div className="profile-row">
            <div className="profile-purchase-history profile-row-items">
                <p>Purchase History</p>
            </div>
            <div className="profile-signout-btn profile-row-items">
                <p>Sign Out</p>
            </div>
        </div>
        <div className="profile-row">
            <div className="profile-setting profile-row-items">
                <p>Settings</p>
            </div>
            <div className="profile-country-lang profile-row-items">
                <img src={downArrow} alt="" />
                <img id='lang' src={lang} alt="" />
                <img src={downArrow} alt="" />
                <img id = 'lang'src={lang} alt="india" />
            </div>
        </div>
        <div className="profile-row profile-row-d profile-row-items">
            <p>Check VR / AR Compatibility</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProfilePage
