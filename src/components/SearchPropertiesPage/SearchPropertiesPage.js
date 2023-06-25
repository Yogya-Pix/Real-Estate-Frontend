import React, { useState } from 'react'
import Footer from '../footer/footer'
import BottomNav from '../bottom_navbar/bottomNav'
import Slider from '../imageSlider/Slider'
import PropertyBtn from '../propertyTypeButton/PropertyBtn'
import './SearchPropertiesPage.css'
import SearchCity from '../filterBox/SearchCity'
import FilterType from '../filterBox/FilterType'
import PropertyFilter from '../filterBox/PropertyFilter'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Mapicon } from '../../assets/map.svg'
import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Filter } from '../../assets/filter.svg'
import useFetch from '../../hooks/useFetch'
import $ from 'jquery'
import Searchbar from '../filterBox/Searchbar'
import { Link } from 'react-router-dom'
import HomeSlider from '../HomeSlider'

function SearchPropertiesPage() {

  const [searchvalue, setsearchvalue] = useState()
  const [changevalue, setchangevalue] = useState()
  const { data, loading, error } = useFetch("/property")

  $(".showmoreslider").on('click', function () {
    $(".sssparentslider").addClass("showparent");
    $(this).removeClass("showparent");
  });

  $(".showlessslider").on('click', function () {
    $(".sssparentslider").removeClass("showparent");
    $(this).addClass("showparent");
  });

  function hidebtn1() {
    const value1 = document.getElementById("showmorebtn1");
    const value2 = document.getElementById("showlessbtn1");

    value1.classList.add("dontshowmoresliderbtn")
    value1.classList.remove("showmoresliderbtn")
    value2.classList.add("showmoresliderbtn")
    value2.classList.remove("dontshowmoresliderbtn")
  }

  function hidebtn2() {
    const value1 = document.getElementById("showmorebtn1");
    const value2 = document.getElementById("showlessbtn1");

    value1.classList.add("showmoresliderbtn")
    value1.classList.remove("dontshowmoresliderbtn")
    value2.classList.add("dontshowmoresliderbtn")
    value2.classList.remove("showmoresliderbtn")
  }

  const updatesearchvalue = (event) => {
    setsearchvalue(event.target.value);
  }

  return (
    <>
      <div className="parent-main-filterbox-container">
        <div className="main-filterbox-container">
          <div className="filters-container">
            <div className="filter-types">
              <SearchCity />
              <PropertyFilter />
              <FilterType />
            </div>
            <div className="filter-property-search-bar">
              <input type="text" placeholder='Search for “Residential House in Nantes, France”' value={searchvalue} onChange={updatesearchvalue} />
            </div>
          </div>
          <Link to={`/searchbar/${searchvalue}`} style={{ color: "black" }}>
          <div className="filter-search-btn-container">
            <Search />
            <p>Search</p>
          </div>
          </Link>
        </div>
        <div className="show-on-map-btn">
          <div className='btm__nav'>
            <div className='btm__nav-btn'>
              <Mapicon />
              Show on Map</div>
          </div>
        </div>
      </div>


      <div className="search-results-container-main">
        <div className="search-results-filters-shown">
          <h1>Search Results </h1>
          {/* <div className="selected-filters">
            <div className="filter">Residential Property
              <Cross />
            </div>
            <div className="filter">United Kingdom
              <Cross />
            </div>
            <div className="filter">Australia
              <Cross />
            </div>
            <div className="filter">Italy
              <Cross />
            </div>
          </div> */}


        </div>
        <div className="filter-list-btn">
          <Filter />
          Filters</div>
      </div>


      <div className="super-super-parent-slider">
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
      {/* <HomeSlider/> */}
      <div className='slidershowmore'>
        <div className='expandslider'>
          <p className="showmoreslider showmoresliderbtn" onClick={hidebtn1} id='showmorebtn1'>Show More...</p>
          <p className="showlessslider dontshowmoresliderbtn" onClick={hidebtn2} id='showlessbtn1'>Show Less...</p>
        </div>
      </div>
      <PropertyBtn />
      <BottomNav />
      <Footer />
    </>
  )
}

export default SearchPropertiesPage
