import React, { useState,useEffect, useRef } from 'react';
import "./index.css";
import axios from "axios";
import CopyAdress from './CopyAdress';
import TokenPrice from './TokenPrice';
import ButtonFox from "./metamask/ButtonFox"
//import MetaMask  from "./metamask"
export default function TokenWidget({className,contract,iconToken,theme,customBg,transparent,bgIcon, widthCard, primaryColor,linkBsc}) {
    const [token, setToken] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.pancakeswap.info/api/v2/tokens/${contract}`).then(res => {
          const token = res.data;
          setToken(token.data);
          setLoading(false);

        });
      }, [contract]);




    const ref = useRef(null);

    const [cardAttributes, setCardAttributes] = useState();
    useEffect(() => {
        setCardAttributes(ref.current.offsetWidth)
      }, []);

      //console.log(cardAttributes)

      let formatCard = "";
        if (cardAttributes < 768){
            formatCard = " card-sm "
        }
        if (cardAttributes < 240){
            formatCard = " card-xs "
        }
        if (cardAttributes > 768){
            formatCard = " card-md "
        }
     /*    if (cardAttributes > 900){
            formatCard = " card-lg "
        }

        if (cardAttributes > 1400){
            formatCard = " card-xlg "
        }
    */

    let themeWidget
        if (theme === "dark"){
             themeWidget = " theme-dark"
        }
        if (theme === "light"){
             themeWidget = " theme-light"
        }

        let opacity = "";
        if (transparent === "true"){
            opacity = " bg-transparent "
        }


        let tokenBg
        if (bgIcon === "true"){
            tokenBg= "url(" + iconToken + ")"
        } else{
            tokenBg = "none"
        }

    return(
        <div ref={ref} id='cardtoken'
            className={
                className + " " +themeWidget + " " + formatCard+ " " + opacity + ' card-token '}
                style={{
                    backgroundColor:`${customBg}`,
                    width:`${widthCard}`,
                    borderColor:`${primaryColor ? primaryColor : "trasnparent"}`,
                    borderWidth:`${primaryColor ? "5px" : "0"}`,
                }
            }
         >
            <div className='content-token'>

                <TokenPrice token={token} loading={loading} contract={contract} iconToken={iconToken} primaryColor={primaryColor} linkBsc={linkBsc} />

                <div className='inputgroup-contract' >
                    <CopyAdress contract={contract}/>
                    {/* <MetaMask  token={token}  iconToken={iconToken} contract={contract}/> */}
                    <a href='https://metamask.io/download.html' target="_blank" without rel="noreferrer"><ButtonFox/> </a>
                </div>
            </div>
            <div className='bg-token' style={{backgroundImage:`${tokenBg}`}}></div>
        </div>
    )
};
