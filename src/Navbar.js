import React, { useState, useRef, } from 'react'
import { FaBars, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa'

import { links, social } from './data'
import logo from './logo.png'

const Navbar = () => {
  const [show, setshow] = useState(false)
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='imge' src={logo} alt='logo' />
          <button className='nav-toggle' onClick={setshow(!show)}>
            <FaBars />

          </button>
        </div>
        <div className={`show? 'links-container show-container': 'links-container'`}>
          <ul className='links'>
            {
              links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}> {text}</a>

                  </li>
                )
              })
            }
          </ul>
        </div>
        <ul className='social-icons'>
          {
            social.map((social) => {
              const { id, url, icon } = social;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
