import React from 'react'
import "./homefocussection.scss";

import Devfeaturevideo from "../../../assets/video/dev-features.mp4"

export default function Homefocussection() {
    return (
        <div className='home-focus-section-main'>
            <div className='container2'>
                <div className='home-focus-section-content'>
                    <span>[005. Free Your Team]</span>
                    <h2>Focus on What Matters Most</h2>
                    <p>Streamline user onboarding with minimal code, freeing your team to build your core product.</p>
                </div>
                <div className='dev-feature-video-main'>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src={Devfeaturevideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div >
    )
}
