import React, { useRef, useEffect, useState } from 'react'
import './SearchCity.css'
import useFetch from '../../hooks/useFetch'
// import downArrow from '../../assets/downArrow.png'
import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg'

function SearchCity() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    };
  }, [isMenuOpen])

  const [city, setCity] = useState();


  const { data, loading, error } = useFetch(`/property?country=Italy}`)

  console.log(data)

  return (
    <>
      <div className="search-dropdown-main-container">
        <div className="dropdown-container" ref={ref}>
          <button className='dropdown-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="dropdown-btn-div">
              <DownArrow />
              <p>Search City</p>
            </div>

          </button>
          {isMenuOpen &&
            <ul className='dropdown-list'>
              {
                data.map((item) => (
                  <li className="dropdown-list-items" key={item.id}>{item.location}</li>
                ))
              }
            </ul>
          }
        </div>
      </div>
    </>
  )
}

export default SearchCity
