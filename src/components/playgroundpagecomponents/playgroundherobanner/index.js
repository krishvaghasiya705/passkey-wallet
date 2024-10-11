import React from 'react'
import "./playgroundherobanner.scss";

import Astroidbackimage from "../../../assets/image/asteroid.png"
import Playgoundvideo from "../../../assets/video//box-spinning.mp4"

export default function Playgroundherobanner() {
    return (
        <div className='playground-hero-banner-main'>
            <div className='container'>
                <div className='playground-herobanner-content-main'>
                    <div className='playground-herobanner-content-first-div'>
                        <span>[Limited Availability]</span>
                        <h1>Experience the future of crypto and claim your <p>unique prize</p></h1>
                    </div>
                </div>
            </div>
            <div className='playground-herobanner-back-image'>
                <img src={Astroidbackimage} alt="Astroidbackimage" />
            </div>
            <div className='playground-herobanner-back-video'>
                <video autoPlay loop muted playsInline preload="auto">
                    <source src={Playgoundvideo} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}
