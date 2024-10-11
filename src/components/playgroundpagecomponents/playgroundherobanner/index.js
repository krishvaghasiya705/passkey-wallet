import React from "react";
import "./playgroundherobanner.scss";

import Astroidbackimage from "../../../assets/image/asteroid.png";
import Playgoundvideo from "../../../assets/video//box-spinning.mp4";
import ScrolledLogo from "../../../assets/svg/scrolledlogo";
import { NavLink } from 'react-router-dom';

export default function Playgroundherobanner() {
    return (
        <div className="playground-hero-banner-main">
            <div className="container">
                <div className="playground-herobanner-content-main">
                    <div className="playground-herobanner-content-first-div">
                        <span>[Limited Availability]</span>
                        <h1>
                            Experience the future of crypto and claim your <p>unique prize</p>
                        </h1>
                    </div>
                    <div className="playground-herobanner-content-second-div">
                        <div className="playground-herobanner-content-second-div-first-div">
                            <p>Follow these simple steps:</p>
                            <div className="playground-herobanner-content-second-div-first-div-boxes-main">
                                <div className="playground-herobanner-content-second-div-first-div-box">
                                    <span>[1] Connect your Passkey</span>
                                    <div className="checkbox"></div>
                                </div>
                                <div className="playground-herobanner-content-second-div-first-div-box">
                                    <span>[2] Open the box</span>
                                    <div className="checkbox"></div>
                                </div>
                                <div className="playground-herobanner-content-second-div-first-div-box">
                                    <span>[3] Claim your prize</span>
                                    <div className="checkbox"></div>
                                </div>
                            </div>
                        </div>
                        <div className="passkey-button-main">
                            <NavLink to={"/playground"}>
                                <button type="button">
                                    <div className="passkey-button-main-scrolledlogo">
                                        <ScrolledLogo />
                                    </div>
                                    <span>Connect Passkey</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="playground-herobanner-back-image">
                <img src={Astroidbackimage} alt="Astroidbackimage" />
            </div>
            <div className="playground-herobanner-back-video">
                <video autoPlay loop muted playsInline preload="auto">
                    <source src={Playgoundvideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
