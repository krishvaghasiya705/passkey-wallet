import React, { useState } from "react";
import "./developerpagemain.scss";
import Devrighticon from "../../../assets/svg/devrighticon";
import Dooricon from "../../../assets/svg/dooricon";

export default function Developerpagemain() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setActiveButton(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="developer-page-main-layout">
      <div className="developer-page-main-left-eye">
        <div className="developer-page-main-left-eye-buttons-content">
          <div
            className={`dev-pagination-button ${
              activeButton === "overview" ? "active" : ""
            }`}
            slot="1"
          >
            <button type="button" onClick={() => handleButtonClick("overview")}>
              Overview
            </button>
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "quickstart" ? "active" : ""
            }`}
            slot="2"
          >
            <button
              type="button"
              onClick={() => handleButtonClick("quickstart")}
            >
              Quickstart
            </button>
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "api" ? "api-drp-active" : ""
            }`}
            slot="3"
          >
            <button
              type="button"
              onClick={() => {
                handleButtonClick("api");
                toggleDropdown("api");
              }}
            >
              API Reference <Devrighticon />
            </button>
            {activeDropdown === "api" && (
              <div
                className={`api-ref-dropdown-main ${
                  activeDropdown === "api" ? "open" : ""
                }`}
              >
                <div className="api-ref-dropdown-button" slot="3/1">createWallet</div>
                <div className="api-ref-dropdown-button" slot="3/2">
                  {"<WalletProvider>"}
                </div>
                <div className="api-ref-dropdown-button" slot="3/3">
                  {"<WalletWidget>"}
                </div>
              </div>
            )}
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "recipes" ? "recipe-drp-active" : ""
            }`}
            slot="4"
          >
            <button
              type="button"
              onClick={() => {
                handleButtonClick("recipes");
                toggleDropdown("recipes");
              }}
            >
              Recipes <Devrighticon />
            </button>
            {activeDropdown === "recipes" && (
              <div
                className={`recipes-dropdown-main ${
                  activeDropdown === "recipes" ? "open" : ""
                }`}
              >
                <div className="recipes-dropdown-button" slot="4/1">Wagmi</div>
                <div className="recipes-dropdown-button" slot="4/2">RainbowKit</div>
                <div className="recipes-dropdown-button" slot="4/3">
                  Solana Wallet Adapter
                </div>
                <div className="recipes-dropdown-button" slot="4/4">Sats Connect</div>
                <div className="recipes-dropdown-button" slot="4/5">Web3-Onboard</div>
                <div className="recipes-dropdown-button" slot="4/6">Viem</div>
                <div className="recipes-dropdown-button" slot="4/7">MIPD</div>
                <div className="recipes-dropdown-button" slot="4/8">
                  Detecting Other Wallets
                </div>
              </div>
            )}
          </div>
          <div
            className={`dev-pagination-button ${
              activeButton === "faq" ? "active" : ""
            }`}
            slot="5"
          >
            <button type="button" onClick={() => handleButtonClick("faq")}>
              FAQ
            </button>
          </div>
        </div>
      </div>
      <div className="developer-page-main-centered-content">
        <div className="developer-page-main-centered-content-alignment">
          <>
            <div
              className="developer-center-content-main-for-overview"
              slot="1"
            ></div>
            <div
              className="developer-center-content-main-for-quickstart"
              slot="2"
            ></div>
            <div
              className="developer-center-content-main-for-api-child-createwallet"
              slot="3/1"
            ></div>
            <div
              className="developer-center-content-main-for-api-child-walletprvider"
              slot="3/2"
            ></div>
            <div
              className="developer-center-content-main-for-api-child-walletwidget"
              slot="3/3"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Wagmi"
              slot="4/1"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-RainbowKit"
              slot="4/2"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Solana-Wallet-Adapter"
              slot="4/3"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Sats-Connect"
              slot="4/4"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Web3-Onboard"
              slot="4/5"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Viem"
              slot="4/6"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-MIPD"
              slot="4/7"
            ></div>
            <div
              className="developer-center-content-main-for-recipe-child-Detecting Other Wallets"
              slot="4/8"
            ></div>
            <div
              className="developer-center-content-main-for-FAQ"
              slot="5"
            ></div>
          </>
        </div>
      </div>
      <div className="developer-page-main-right-eye">
        <div className="dev-page-right-flx dev-page-right-flx-for-overview" slot="1">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        {/* <div className="dev-page-right-flx dev-page-right-flx-for-quickstart" slot="2">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-api-child-createwallet" slot="3/1">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-api-child-walletprovider" slot="3/2">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-api-child-walletwidget" slot="3/3">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-wagmi" slot="4/1">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-rainbowkit" slot="4/2">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-solana-wallet-provider" slot="4/3">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-sats-connect" slot="4/4">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-web3-onboard" slot="4/5">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-viem" slot="4/6">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-mipd" slot="4/7">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-recipe-child-detection-other-wallets" slot="4/8">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div>
        <div className="dev-page-right-flx dev-page-right-flx-for-faq" slot="5">
          <p>On This Page</p>
          <a href="/">Overview</a>
          <a href="/">How It Works</a>
          <a href="/">What It Means For Your Users</a>
          <a href="/">Try It Yourself!</a>
        </div> */}
        <div className="reduce-bx-main">
          <Dooricon />
          <p>Reduce drop-off and unlock new revenue streams effortlessly.</p>
          <a href="/">get access</a>
        </div>
      </div>
    </div>
  );
}
