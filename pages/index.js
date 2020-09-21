import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'


const Homepage = ({ t }) => (
 
      <div>
       <h3> {t('h1')}</h3>
         {t('homeTitle')}
      </div>
  
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
