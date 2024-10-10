import React from 'react'
import "./unlockliquidity.scss"

import Rockimage from "../../../assets/image/rock-poster.png"

import Liquidityvideo from "../../../assets/video/liquidity.mp4"
import Tybutton from './../../buttons/trybutton/index';

export default function Unlocliquidity() {
    return (
        <div className='unlock-liquidity-main'>
            <div className='roack-image-main'>
                <img src={Rockimage} alt="Rockimage" />
            </div>
            <div className='unlock-liquidity-content-main'>
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
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='unlock-liquidity-content-mainsc'>
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
