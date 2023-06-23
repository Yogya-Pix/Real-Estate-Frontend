import React from 'react'
import Navbar from '../../components/Navbar'
import '../property/PropertyStyle.css'
import Brief from '../../components/DetailPage/brief/Brief'
import Vr_display from '../../components/DetailPage/vr_display/Vr_display'
import Amenities from '../../components/DetailPage/amenities/Amenities'
import Summary from '../../components/DetailPage/summary/Summary'
import Footer from '../../components/footer/footer'
import BottomNav from '../../components/bottom_navbar/bottomNav'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Slider from '../../components/imageSlider/Slider'

export default function Property() {
    const location = useLocation()
    const id = location.pathname.split("/")[2];

    const { data, laoding, error } = useFetch(`/property/${id}`)
    // const { nearbydata, nearbylaoding, nearbyerror} = useFetch('/property')

    return (
        <div>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <Brief data={data} />
            <Vr_display data={data}/>
            <Amenities />
            <Summary data={data} />
            {/* <div className='nearby_property_container'>
                <p className='neabyname'>Nearby Properties</p>
                <div className='nearby_property_items'>
                    <>
                        {nearbydata.map((item) => (
                            <Slider key={item._id} item={item} />
                        ))}
                    </>
                </div>
            </div> */}
            <BottomNav />
            <Footer />
        </div>
    )
}
