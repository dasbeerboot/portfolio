import React from 'react'
import './Header.scss'

function Header(): JSX.Element {
  return (
    <header className="quiz-header">
      <div className="header-title">
        <div className="name">
          Juwon Chun
        </div>
        <div className="icons">
          <div>icons</div>
        </div>
      </div>
    </header>
  )
}

export default Header
