import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'

const Homepage = ({ t }) => (

      <div>
  {t('aboutTitle')}
      </div>
   
 
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('home')(Homepage)
