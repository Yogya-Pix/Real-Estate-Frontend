import React, { useState } from "react";

import "./ImageSliderstyle.css";


export default function ImageSlider ({ data }){
    const [slide, setSlide] = useState(0);

    return (
        <div className="carousel">
            {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })}
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    )
                })}
            </span>
        </div>
    );
};