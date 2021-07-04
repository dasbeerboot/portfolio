import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header(): JSX.Element {
  const handleGoPage = (field: string) => {
    if (field === 'git') {
      window.open('https://github.com/dasbeerboot', '_blank')
    }else {
      window.open('mailto:juwonchun@gmail.com')
    }
  }
  return (
    <header className="portfolio-header">
      <div className="header-title">
        <div className="icons">
          <FontAwesomeIcon className="git" icon={faGithub} onClick={() => handleGoPage('git')}/>
          <FontAwesomeIcon className="email" icon={faEnvelope} onClick={() => handleGoPage('email')}/>
        </div>
      </div>
    </header>
  )
}

export default Header
