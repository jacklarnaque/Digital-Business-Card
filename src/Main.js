import React from 'react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
  return (
    <>
      <div className='main-container'>
        <h1 className='name' >Laura Smith</h1>
        <h2 className='status'>Frontend Developper</h2>
        <h3>laurasmiith.website</h3>
        <button className='buttonMail'><FontAwesomeIcon icon={faEnvelope} /> Email</button>
        <button className='buttonLinkedin'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
      <div className='about'>
        <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. 
            Pop culture ninja. Coffee fanatic.</p>
      </div>
      </div>
    </>
  )
}

export default Main

