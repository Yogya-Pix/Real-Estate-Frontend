import React from 'react'
import './Slider.css'
import ImageSlider from './ImageSlider'
import { ReactComponent as VRimg } from '../../assets/VRimg.svg'
import { ReactComponent as ARimg } from '../../assets/ARimg.svg'
import { ReactComponent as Mimg } from '../../assets/Mimg.svg'
import { ReactComponent as FavIcon } from '../../assets/fav.svg'
// import { ReactComponent as Dot } from '../../assets/dot.svg'


function Slider() {

  const slider = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ];

  return (
    <>
      <div className="super-super-parent-slider">
        <div className="super-parent-slider">
          <div className="parent-slider">
            <div className="slider-content">
              <div className="slider-image">
                <div className='slider-image-bgimg'>
                  <ImageSlider data={slider} />
                </div>
                <div className='slider-image-vrimages'>
                  <div className="vrimages">
                    <h4>VR</h4>
                    <VRimg />
                  </div>
                  <div className="vrimages">
                    <h4>AR</h4>
                    <ARimg />
                  </div>
                  <div className="vrimages">
                    <h4>M</h4>
                    <Mimg />
                  </div>
                </div>
              </div>
              <div className="parent-slider-content-information">
                <div className="slider-content-information">
                  <h4>Edinburgh, United Kingdom</h4>
                  <p id='owner-para'>Owner Name . What does owner do as profession</p>
                  <div className="applied-filters">
                    <p>2 BHK</p>
                    <p id="middle-dot">.</p>
                    <p>Residential property</p>
                    <p id="middle-dot">.</p>
                    <p>Central Air Conditioning</p>
                  </div>
                  <h3>$ 230,000</h3>
                </div>
                <FavIcon />
              </div>

            </div>
          </div>
          <div className="parent-slider">
            <div className="slider-content">
              <div className="slider-image">
                <div className='slider-image-bgimg'>
                  <ImageSlider data={slider} />
                </div>
                <div className='slider-image-vrimages'>
                  <div className="vrimages">
                    <h4>VR</h4>
                    <VRimg />
                  </div>
                  <div className="vrimages">
                    <h4>AR</h4>
                    <ARimg />
                  </div>
                  <div className="vrimages">
                    <h4>M</h4>
                    <Mimg />
                  </div>
                </div>
              </div>
              <div className="parent-slider-content-information">
                <div className="slider-content-information">
                  <h4>Edinburgh, United Kingdom</h4>
                  <p id='owner-para'>Owner Name . What does owner do as profession</p>
                  <div className="applied-filters">
                    <p>2 BHK</p>
                    <p id="middle-dot">.</p>
                    <p>Land/Plot</p>
                    <p id="middle-dot">.</p>
                    <p>2 Floor Apartment</p>
                  </div>
                  <h3>$ 230,000</h3>
                </div>
                <FavIcon />
              </div>

            </div>
          </div>
          <div className="parent-slider">
            <div className="slider-content">
              <div className="slider-image">
                <div className='slider-image-bgimg'>
                  <ImageSlider data={slider} />
                </div>
                <div className='slider-image-vrimages'>
                  <div className="vrimages">
                    <h4>VR</h4>
                    <VRimg />
                  </div>
                  <div className="vrimages">
                    <h4>AR</h4>
                    <ARimg />
                  </div>
                  <div className="vrimages">
                    <h4>M</h4>
                    <Mimg />
                  </div>
                </div>
              </div>
              <div className="parent-slider-content-information">
                <div className="slider-content-information">
                  <h4>Edinburgh, United Kingdom</h4>
                  <p id='owner-para'>Owner Name . What does owner do as profession</p>
                  <div className="applied-filters">
                    <p>2 BHK</p>
                    <p id="middle-dot">.</p>
                    <p>Land/Plot</p>
                    <p id="middle-dot">.</p>
                    <p>2 Floor Apartment</p>
                  </div>
                  <h3>$ 230,000</h3>
                </div>
                <FavIcon />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Slider

