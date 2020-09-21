
import React,{useEffect} from 'react';
import App from 'next/app'

import { i18n, Link, appWithTranslation } from '../i18n'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Header from '../components/Header'
import Footer from '../components/Footer'
const MyApp = ({ Component, pageProps ,t}) => {
    useEffect(()=>{
        // i18n.changeLanguage('ja')
    },[])
    return <> <DefaultSeo {...SEO} />
    <main>
      <Header />
              
      <Component {...pageProps} />
    <Footer />
    </main>
  
</>
}




MyApp.getInitialProps = async (appContext) => {
    return{
        ...await App.getInitialProps(appContext)
    }
}

export default appWithTranslation(MyApp)
