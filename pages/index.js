import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'


const Homepage = ({ t }) => {
  console.log( t('home:aboutTitle'));
  return  <div>
  <h3> {t('common:h1')}</h3>
    {t('common:homeTitle')}
    <br/>
     {t('home:aboutTitle')}
       <br/>
     {t('classroomTitle')}
     
 </div>
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common','home'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('classroom/classroom.cart')(Homepage)
