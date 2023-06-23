'use strict'
import React, { useState } from 'react'
import '../styles/MidnavStyle.css'
import useFetch from "../hooks/useFetch"

export default function Midnav() {

    // const { data , loading, error } = useFetch("/property")
    // console.log(data)

    // const [ destination, setDestination ] = useState(["Manchaster", "Bristol", "Nottingham", "Birmingham", "Brisbane", "Cairns", "Darwin", "London"]);
    const [value, setvalue] = useState();
    // const { data, loading, error } = useFetch()
    // console.log(data)

    return (
        <div>
            <div className='midcontainer'>
                <div className='midnav_container'>
                    <p onClick={() => setvalue("Manchaster")}>Manchaster</p>
                    <p onClick={() => setvalue("Bristol")}>Bristol</p>
                    <p onClick={() => setvalue("Nottingham")}>Nottingham</p>
                    <p onClick={() => setvalue("Birmingham")}>Birmingham</p>
                    <p onClick={() => setvalue("Brisbane")}>Brisbane</p>
                    <p onClick={() => setvalue("Cairns")}>Cairns</p>
                    <p onClick={() => setvalue("Darwin")}>Darwin</p>
                    <p onClick={() => setvalue("London")}>London</p>
                </div>
            </div>
            {/* <div className='allitemscontainer'>
                <>
                    {data.map((item) => (
                        
                        <div className='itemdetails' key={item._id}>
                            <p>{item.country}</p>
                            <p>{item.location}</p>
                            <p>{item.owername}</p>
                            <p>{item.bhk}</p>
                            <p>{item.protertytype}</p>
                            <p>{item.feature}</p>
                            <p>₹.{item.price}</p>
                        </div>
                    ))}
                </>
            </div> */}
        </div>
    )
}
