import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header(): JSX.Element {
  return (
    <header className="portfolio-header">
      <div className="header-title">
        <div className="icons">
          <FontAwesomeIcon className="git" icon={faGithub}/>
          <FontAwesomeIcon className="email" icon={faEnvelope} />
        </div>
      </div>
    </header>
  )
}

export default Header
