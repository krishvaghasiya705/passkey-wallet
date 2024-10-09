import React from 'react'
import "./homeherobanner.scss"

import Rockvideo from '../../../assets/video/rock-video.mp4';
import Exoduslogo from './../../../assets/svg/exoduslogo';
import Growicon from '../../../assets/svg/Growicon';

export default function HomepageHeroBanner() {
    return (
        <div className='home-herobanner-main'>
            <video autoPlay loop muted playsInline preload="auto">
                <source src={Rockvideo} type='video/mp4' />
            </video>
            <div className='home-herobanner-main'>
                <div className='home-herobanner-content-main'>
                    <div className='container'>
                        <div className='home-herobanner-content'>
                            <div className='home-herobanner-title-div-main'>
                                <div>
                                    <p>[000. Where It All Starts]</p>
                                    <h1>One-click Web3 onboarding with Passkeys Developer kit</h1>
                                </div>
                                <div className='home-herobanner-exoduslogo-main'>
                                    <span>
                                        by
                                        <Exoduslogo />
                                    </span>
                                </div>
                            </div>
                            <div className='home-herobanner-content-two'>
                                <div className='home-herobanner-content-two-pera'>
                                    <p>Simplify wallet creation and funding for new web3 users through biometric login</p>
                                </div>
                                <div className='home-herobanner-content-two-button-div-main'>
                                    <button type='button'>Try our demo<Growicon /></button>
                                    <button type='button'>Developer docs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroabnner-bac-two'></div>
        </div>
    )
}
