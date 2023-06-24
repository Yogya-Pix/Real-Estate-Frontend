import React from 'react'
import Slider from '../imageSlider/Slider'
import useFetch from '../../hooks/useFetch'
import '../propertyslider/PropertysliderStyle.css'

export default function Propertyslider() {
  const { data, loading, error } = useFetch('/property')
  return (
    <div>
      <div className='nearby_property_container'>
        <div className='nearby_property_div'>
        <p className='neabyname'>Nearby Properties</p>
        <div className='nearby_property_items'>
          <>
            {data.map((item) => (
              <Slider key={item._id} item={item} />
            ))}
          </>
        </div>
        </div>
      </div>
    </div>
  )
}
