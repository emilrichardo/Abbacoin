import React, {useState} from 'react';
import logo from "../assets/logo/logo.svg"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import { useTranslation } from "react-i18next"
const Header = () => {
    const {languages, originalPath} = useI18next();
    const {t} = useTranslation();
    const[toggleMenu, setToggleMenu] = useState(false);

    const MenuToggleSwitch = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
    <>
     <header>
            <nav>
                <div className="navigation">
                    <div className="logo-wrapper">
                        <a href="./" className="logo"><img alt='logo' src={logo}/></a>
                        <div className="language">
                            {languages.map((lng) => (
                                <Link to={originalPath} language={lng} key={lng}>
                                {lng}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div role="button" tabIndex="-1" aria-label="Menu" className="hamburguer" onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={toggleMenu ? "nav active" : "nav"}>
                        <li><a  onClick={MenuToggleSwitch}  href='#one'>{t("Menu_Home")}</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='#two'>{t("Menu_About")}</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='#three'>Whitepaper</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='https://pancakeswap.finance/info/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e' target="_blank"  rel="noreferrer" className="btn c-red br-30">{t("Btn_Buy")}</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
    ;
}

export default Header;