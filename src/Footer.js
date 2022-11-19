import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='box-button-footer'>
<button className='button-footer'><FontAwesomeIcon icon={faTwitter}/></button>
<button className='button-footer'><FontAwesomeIcon icon={faFacebook}/></button>
<button className='button-footer'><FontAwesomeIcon icon={faInstagram}/></button>
<button className='button-footer'><FontAwesomeIcon icon={faGithub}/></button>
      </div>
    </div>
  )
}

export default Footer