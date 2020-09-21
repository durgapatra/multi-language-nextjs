import PropTypes from 'prop-types'
import Head from 'next/head'
import {i18n, withTranslation,Link } from '../i18n'

const Header = ({ t }) => (
  <div
    style={{    
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    
    <h1>
    {t('h1')}
    </h1>
    <Link href='/'>
    Home
    </Link>
    <Link href='/about'>
    About
    </Link>
   <div>
   <button
          type='button'
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('ja')}
        >
         JA
        </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('zh')}
        >
         ZH
        </button>
   </div>
       
      
  </div>
)

Header.propTypes = {
  t: PropTypes.func,
}

export default withTranslation('common')(Header)
