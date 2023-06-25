import React from 'react'
import Slider from './imageSlider/Slider'
import useFetch from '../hooks/useFetch'

export default function HomeSlider() {
  const { data, loading, error } = useFetch('/property')

    return (
        <div>
            <div className="search_result_items">
                <div className='sssparentslider' id='showhiddensliderdiv'>
                    <div className="super-parent-slider">
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
