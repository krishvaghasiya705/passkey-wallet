import React from 'react'
import "./Effortssection.scss"
import { Link } from 'react-router-dom'
import Growicon from './../../../assets/svg/Growicon';
import Featurevideo1 from "../../../assets/video/feature-video1.mp4"
import Featurevideo2 from "../../../assets/video/feature-video2.mp4"
import Featurevideo3 from "../../../assets/video/feature-video3.mp4"
import Featurevideo4 from "../../../assets/video/feature-video4.mp4"

export default function Homeffortssection() {

    return (
        <div className='home-efforts-section-main'>
            <div className='container2'>
                <div className='home-efforts-content'>
                    <span>[006. For developers]</span>
                    <h2>Effortless Integration</h2>
                    <p>Embed the Passkeys wallet on your platform with just a few lines of code.</p>
                </div>
            </div>
            <div className='container3'>
                <div className='home-efforts-section-slider-main-alignment'>
                    <div className='home-efforts-section-slider-main'>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main'>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo1} type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Quick Integration</h3>
                                </div>
                                <div>
                                    <p>Leverage compatibility with existing libraries like Wagmi or Solana Wallet Adapter for a smooth, drop-in integration.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main'>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo2} type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Security Powered by MPC</h3>
                                </div>
                                <div>
                                    <p>Multi-party computation ensures user safety with features like spending limits, while maintaining self-custody.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main'>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo3} type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Custom Themes</h3>
                                </div>
                                <div>
                                    <p>Choose colors and defaults, and make the Passkeys wallet blend seamlessly with your platform.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className='home-efforts-card-main'>
                                <div className='home-efforts-card-image'>
                                    <video autoPlay loop muted playsInline preload="auto">
                                        <source src={Featurevideo4} type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <h3>Multichain Support</h3>
                                </div>
                                <div>
                                    <p>Bitcoin, Ethereum, Polygon, Solana, Arbitrum One, Avalanche, Base, BNB Chain, Mantle and Optimism.</p>
                                </div>
                                <Link to={"/"} className='learn-more-button'>learn more <Growicon /></Link>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}