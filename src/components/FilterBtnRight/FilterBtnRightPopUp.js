import React from 'react'
import './FilterBtnRightPopUp.css'
import { ReactComponent as Cross } from '../../assets/cross.svg'

function FilterBtnRightPopUp() {
    return (
        <>
            <div className=".filter-popup-container-main-parent">
                <div className="filter-popup-container-main">

                    <div className="filter-popup-container-left">
                        <div className="filter-section">
                            <h4>Property Features</h4>
                            <div className="filter-categories">
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                            </div>

                        </div>
                        <div className="filter-section">
                            <h4>Nearby Cities</h4>
                            <div className="filter-categories">
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                            </div>
                        </div>
                        <div className="filter-section">
                            <h4>Type of Property</h4>
                            <div className="filter-categories">
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                                <p>Property</p>
                            </div>
                        </div>
                        <div className="filter-section">
                            <h4>Price Range</h4>
                            <div className="filter-categories">
                                <p>Property</p>
                                <p>Profdsaperty</p>
                                <p>Property</p>
                                <p>Propefadsrty</p>
                                <p>Propertdfsay</p>
                                <p>Prodafsafperty</p>
                                {/* <p>Property</p> */}
                                <p>Property</p>
                                <p>Propderty</p>
                                {/* <p>Propefasdrty</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='filter-popup-container-right'>
                        <Cross />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterBtnRightPopUp
