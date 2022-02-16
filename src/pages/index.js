import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import  favicon from "../assets/favicon/favicon.ico"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import whitePaperEng from "../downloads/whitepapers/Eng.pdf"
import whitePaperEs from "../downloads/whitepapers/Esp.pdf"
import TokenWidget from "../components/tokenwidget"

// markup
const IndexPage = () => {
    const {t,i18n} = useTranslation();
    const {language} = i18n ;



  return (
    <Layout >
      <Helmet>
          <meta name="description" content="A unique ecosystem. Enjoy a distributed system of technological services, which eliminates the disadvantages of the current market, and allows transfers in an agile, reliable and solidly supported manner." />
          <meta name="keywords" content="Abbacoin, crypto, cryptocurrency, cryptomonedas" />
          <meta name="autor" content="Disruptive Studio" />
          <link rel="shortcut icon" href={ favicon } />
          <title>Abbacoin</title>
      </Helmet>

       <main id="page-content">

        <section id="one" className="rel c-grad-violet">
            <div className="h-100vh d-flex ai-center" style={{position: "relative", zIndex:"20"}}>
                <div className="content">
                    <div className="block-box right p-20-30">
                        <StaticImage className="block-box--img"  alt="abbacoin crypto" placeholder="blurred" src="../assets/body/abacoin_crypto.svg" />
                        <div className="wrapper">
                            <h1 className="h1 tc-white">
                                 <div dangerouslySetInnerHTML={
                                    {__html: t('Hero_1', {interpolation: {escapeValue: false}})}
                                } />
                            </h1>
                            <p className="h4 tc-white" dangerouslySetInnerHTML={
                                    {__html: t('Hero_2', {interpolation: {escapeValue: false}})}
                                } />


                            {/* <div className="navigation_body">
                                <a href="#two" className="btn outline red br-30">{t("Btn_Read")}</a>
                            </div> */}

                        <TokenWidget
                                className="cardtokencustom"
                                contract="0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e"
                                linkBsc="https://bscscan.com/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e"
                                iconToken={favicon}
                                theme="dark"
                                bgIcon="true"
                                widthCard="100%"
                                transparent="true"
                                primaryColor="#EA574E "
                                //customBg="rgba(56, 97, 251,.5)"
                            />


                        </div>
                    </div>
                </div>
            </div>
            <div className="h-50vh d-flex ai-center bg-map">
                <div className="content">
                    <div className="w-60 med-w-80 small-w-100 m-center">
                        <div className="d-flex jc-between ai-center fw-wrap">
                            <StaticImage src="../assets/body/ecosistema.svg" alt="ecosistema" placeholder="blurred" className="p-20-30 w-30 small-w-40 small-m-center" />
                            <div className="p-20-30 w-70 small-w-100 tc-white">
                                <h4 className="h3 small-t-center">{t("Eco_1")}</h4>
                                <p className="small-t-center">{t("Eco_2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StaticImage imgStyle={{objectFit: "none"}}	 style={{width:"100%", overflow:'visible'}} src="../assets/body/luz.png" alt="luz" placeholder="blurred"  className="luz"/>
        </section>

        <section className="rel p-10">
            <div className="content br-20">
                <div className="h-50vh d-flex ai-center">
                    <div className="w-50 small-w-100 p-20-30 tc-white box">
                        <h3 className="h1">{t("Mul_1")}</h3>
                        <div className="menu-list item">
                            <ul className="menu-list--ul">
                                <li className="menu-list--item">{t("Mul_2")}</li>
                                <li className="menu-list--item">{t("Mul_3")}</li>
                                <li className="menu-list--item">{t("Mul_4")}</li>
                                <li className="menu-list--item">{t("Mul_5")}</li>
                                <li className="menu-list--item">{t("Mul_6")}</li>
                                <li className="menu-list--item">{t("Mul_7")}</li>
                            </ul>
                        </div>
                    </div>
                    <StaticImage style={{position:"absolute"}} className="block-box-full--img" imgClassName="block-box-full--img"	layout="fullWidth"  alt="ventajas"   src="../assets/body/ventajas.jpeg"/>
                </div>
            </div>
            <div className="cuadro"></div>
        </section>

        <section id="two">
            <div className="block-content">
                <div className="m-center w-80 med-w-90 small-w-100">
                    <div className="block-box">
                        <StaticImage className="block-box--img img" alt="finance"  placeholder="blurred" src="../assets/body/abbacoin_finance.svg" />
                        <div className="wrapper">
                            <h2 className="h3">{t("Com_1")}</h2>
                            <p>{t("Com_2")}</p>
                            <a href="https://pancakeswap.finance/info/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e" className="btn c-red br-30">{t("Btn_Buy")}</a>
                        </div>
                    </div>

                    <div className="block-box right">
                        <StaticImage imgClassName="block-box--img img" alt="chart"  placeholder="blurred" src="../assets/body/abbacoin_pastel.svg" />
                        <div className="wrapper">
                            <h2 className="h3">{t("Apr_1")}</h2>
                            <p>{t("Apr_2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="three" className="c-violet tc-white">
            <div className="block-content">
                <div className="m-center w-70 t-center small-w-100">
                    <h4 className="h2 m-10" dangerouslySetInnerHTML={
                            {__html: t('Ben_1', {interpolation: {escapeValue: false}})}
                        } >
                    </h4>
                    <p className="h4 m-10" dangerouslySetInnerHTML={
                            {__html: t('Ben_2', {interpolation: {escapeValue: false}})}
                        }>
                    </p>
                    <div className="social-share">
                        <ul>
                            <li><a href="https://twitter.com/abc_abbacoin" className="share-twitter bg-color" target="_blank" rel="noreferrer"> <span>Twitter</span> </a></li>
                            <li><a href="https://www.tiktok.com/@abbacoin?Linkedin" className="share-tik-tok bg-color" target="_blank"  rel="noreferrer"><span>tiktok</span></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100076395190692" className="share-facebook bg-color" target="_blank"  rel="noreferrer"><span>Facebook</span></a></li>
                            <li><a href="https://www.youtube.com/channel/UCbcHQHPfPV44azvDr5h1Z3g" className="share-youtube bg-color" target="_blank"  rel="noreferrer"><span>Youtube</span></a></li>
                            <li><a href="https://www.linkedin.com/company/abbacoin/about/" className="share-linkedin bg-color" target="_blank"  rel="noreferrer"><span>Linkedin</span></a></li>
                            <li><a href="https://www.reddit.com/user/abbacoin" className="share-reddit bg-color" target="_blank"  rel="noreferrer"><span>reddit</span></a></li>
                            <li><a href="https://www.instagram.com/abbacoin_abc/" className="share-instagram bg-color" target="_blank"  rel="noreferrer"><span>instagram</span></a></li>
                        </ul>
                    </div>
                    <div className="w-100 d-flex jc-center">
                        <a href={language === "en" ? whitePaperEng : whitePaperEs} target="_blank" rel="noreferrer"  className="btn c-red m-10 br-30 icon download">Whitepaper</a>
                    </div>
                </div>
            </div>
        </section>

        </main>




    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;