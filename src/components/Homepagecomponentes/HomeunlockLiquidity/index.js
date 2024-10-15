import React, { useEffect, useRef } from 'react'
import "./unlockliquidity.scss"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Rockimage from "../../../assets/image/rock-poster.png"

import Liquidityvideo from "../../../assets/video/liquidity.mp4"
import Liquidityvideo2 from "../../../assets/video/liquidity.webm"
import Tybutton from './../../buttons/trybutton/index';

gsap.registerPlugin(ScrollTrigger);

export default function Unlocliquidity() {
    const unlockLiquidityRef = useRef(null);
    const oneWalletRef = useRef(null);

    useEffect(() => {
        const unlockLiquidityTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: unlockLiquidityRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        unlockLiquidityTimeline.fromTo(unlockLiquidityRef.current.querySelector('.unlock-liquidity-content-main-div'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );

        unlockLiquidityTimeline.fromTo(unlockLiquidityRef.current.querySelector('.unlock-liquidity-video'),
            { x: '100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1 },
            "-=0.4"
        );

        // Add text animations
        const unlockLiquidityTexts = unlockLiquidityRef.current.querySelectorAll('span, h2, p');
        unlockLiquidityTexts.forEach((element, index) => {
            unlockLiquidityTimeline.fromTo(element,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                `-=${0.3 * index}`
            );
        });

        const oneWalletTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: oneWalletRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        });

        oneWalletTimeline.fromTo(oneWalletRef.current.querySelector('.one-wallet-content'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );

        // Add text animations for one wallet section
        const oneWalletTexts = oneWalletRef.current.querySelectorAll('span, h2, p');
        oneWalletTexts.forEach((element, index) => {
            oneWalletTimeline.fromTo(element,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                `-=${0.3 * index}`
            );
        });
    }, []);

    return (
        <div className='unlock-liquidity-main'>
            <div className='roack-image-main'>
                <img src={Rockimage} alt="Rockimage" />
            </div>
            <div className='unlock-liquidity-content-main' ref={unlockLiquidityRef}>
                <div className='container2'>
                    <div className='unlock-liquidity-content'>
                        <div className='unlock-liquidity-content-main-div'>
                            <span>[003. Liquidity]</span>
                            <h2>Unlock Liquidity</h2>
                            <p>Leverage untapped liquidity from unsupported networks through seamless cross-chain swaps.</p>
                            <Tybutton />
                        </div>
                        <div className='unlock-liquidity-video'>
                            <video autoPlay loop muted playsInline preload="auto">
                                <source src={Liquidityvideo} type="video/mp4" />
                                <source src={Liquidityvideo2} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='unlock-liquidity-content-mainsc' ref={oneWalletRef}>
                <div className='container2'>
                    <div className='one-wallet-section-main'>
                        <div className='one-wallet-content'>
                            <span>[004. Cross-Application]</span>
                            <h2>One Wallet For All</h2>
                            <p>Passkeys embedded wallets are portable across different applications, allowing you to engage a growing network of users.</p>
                            <Tybutton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
