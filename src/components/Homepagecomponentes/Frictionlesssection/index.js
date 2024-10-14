import React from 'react'
import "./frictionlesssection.scss"

import Rockimage from '../../../assets/image/rock-poster.png'

import Frictionlessvideo from "../../../assets/video/frictionless.mp4";
import Frictionlessvideo2 from "../../../assets/video/frictionless.webm";
import Tybutton from '../../buttons/trybutton'

export default function Frictionlesssection() {
    return (
        <div className='frictionless-section-main'>
            <div className='frictionless-section-background-image'>
                <img src={Rockimage} alt="Rockimage" />
            </div>
            <div className='container2'>
                <div className='frictionlesssection-content-main'>
                    <div className='frictionlesssection-title-div'>
                        <span>[002. Funding]</span>
                        <h2>Frictionless Funding</h2>
                        <p>Enable new users to purchase crypto directly within an embedded wallet on your platform, ensuring higher user retention.</p>
                        <div className='card-image-div'>
                            <Tybutton />
                            <div className='frictionless-video-div'>
                                <video autoPlay loop muted playsInline preload="auto">
                                    <source src={Frictionlessvideo} type="video/mp4" />
                                    <source src={Frictionlessvideo2} type="video/webm" />
                                </video>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
