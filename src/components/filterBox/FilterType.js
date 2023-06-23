import React, { useRef, useEffect, useState } from 'react'
import './FilterType.css'
import useFetch from '../../hooks/useFetch'
import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg'

function FilterType() {

    const [isFilterMenuOpen, setisFilterMenuOpen] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutsideFilterBox = (e) => {
            if (isFilterMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setisFilterMenuOpen(false);
            }
        };
        document.addEventListener("click", checkIfClickedOutsideFilterBox)
        return () => {
            document.removeEventListener("click", checkIfClickedOutsideFilterBox)
        };
    }, [isFilterMenuOpen])

    const Menu = ['a', 'b', 'c', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'];

    const [city, setCity] = useState();


    const { data, loading, error } = useFetch(`/property?country=Italy}`)

    console.log(data)

    return (
        <>
            <div className="filter-dropdown-main-container">
                <div className="filter-dropdown-container" ref={ref}>
                    <button className='filter-dropdpwn-btn' onClick={() => setisFilterMenuOpen(!isFilterMenuOpen)}>
                        <div className="filter-dropdown-btn-div">
                            <DownArrow />
                            <p>Filter</p>
                        </div>
                    </button>
                    {isFilterMenuOpen &&
                        <ul className='filter-dropdown-list'>
                            {
                                data.map((item) => (
                                    <li className="filter-dropdown-list-items" key={item._id}>{item.feature}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default FilterType
