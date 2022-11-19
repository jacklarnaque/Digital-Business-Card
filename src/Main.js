import React from 'react'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
  return (
    <div className='main-container'>
      <h1 className='name' >Laura Smith</h1>
      <h2 className='status'>Frontend Developper</h2>
      <h3>laurasmiith.website</h3>
      <button className='buttonMail'><FontAwesomeIcon icon={faEnvelope}/> Email</button>
      <button className='buttonLinkedin'><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</button>
    </div>
    // 
  )
}

export default Main

