import React from "react";

export default function TokePrice({token,loading,iconToken,primaryColor,linkBsc}) {

    let tokenvalue = parseFloat(token.price).toFixed(2);
    let bnbvalue = parseFloat(token.price_BNB).toFixed(6);



    return(

        <>
        {loading
        ? <div className="lds-ripple"><div></div><div></div></div>
        :
            <div className="tokenprice-content">
            <div className="token-name">
                {iconToken
                ? <img className="icon-token" alt={token.name}  src={iconToken} />
                : <svg className="icon-token"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM12 7.05L16.95 12L12 16.95L7.05 12L12 7.05V7.05ZM12 9.879L9.879 12L12 14.121L14.121 12L12 9.879V9.879Z" fill={primaryColor ? primaryColor  : "#B8B8B8"}/>
                    </svg>
                }
                <h5> {token.name}  <span>({token.symbol})</span> </h5>
            </div>

            <div className="token-price">
                <h4 className='usdprice'> <span className="Symbol">$</span> {tokenvalue}</h4>
                <div className='cryptoprice'>{ bnbvalue }  <BnbIcon/><span>BNB</span> </div>
            </div>
            <a href={linkBsc} target="_blank" rel="noreferrer" className="link-bsc" > Binance Smart Chain (BEP20)</a>
        </div>
        }
        </>



    )
};

export function BnbIcon(){
    return(
        <svg className="ico-bnb"   viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.5694 0C117.305 0 151.139 33.8342 151.139 75.5694C151.139 117.305 117.305 151.139 75.5694 151.139C33.8342 151.139 0 117.305 0 75.5694C0 33.8342 33.8342 0 75.5694 0Z" fill="#F0B90B"/>
            <path d="M56.0159 67.4529L67.4589 56.0481L69.8699 53.6351L75.5874 47.9176L95.0604 67.4529L106.395 56.0481L75.5874 25.1904L44.6794 56.0481L56.0159 67.4529Z" fill="white"/>
            <path d="M75.6029 64.1693L64.2214 75.5508L75.6029 86.9322L86.9844 75.5508L75.6029 64.1693Z" fill="white"/>
            <path d="M95.0604 83.7119L75.5814 103.189L68.7429 96.3504L67.4831 95.0906L56.0159 83.7119L44.6794 95.0483L75.5874 125.904L106.395 95.0483L95.0604 83.7119Z" fill="white"/>
            <path d="M36.5703 64.1995L25.1888 75.5809L36.5703 86.9624L47.9518 75.5809L36.5703 64.1995Z" fill="white"/>
            <path d="M114.57 64.1945L103.189 75.5759L114.57 86.9574L125.952 75.5759L114.57 64.1945Z" fill="white"/>
        </svg>
    )
}
