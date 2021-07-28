import React from 'react'
import './index.scss'
import { IIsHover } from '..'

interface IntroIProps {
  isHover: IIsHover
  onMouseEnter: (field: string) => void
  onMouseLeave: (field: string) => void
  onGoPage: (field: string) => void
}

function Intro({ isHover, onMouseEnter, onMouseLeave, onGoPage }: IntroIProps): JSX.Element {
  return (
    <article className="intro-container">
      <div className="intro">
        <span
          className="greet"
          onMouseEnter={() => onMouseEnter('greet')}
          onMouseLeave={() => onMouseLeave('greet')}
          onClick={() => onGoPage('about')}
        >
          {isHover.greet ? 'About' : 'Hello.'}
        </span>
        <span
          className="iam"
          onMouseEnter={() => onMouseEnter('iam')}
          onMouseLeave={() => onMouseLeave('iam')}
          onClick={() => onGoPage('works')}
        >
          {isHover.iam ? 'Works' : 'I am'}
        </span>
        <span
          className="name"
          onMouseEnter={() => onMouseEnter('name')}
          onMouseLeave={() => onMouseLeave('name')}
          onClick={() => window.open('mailto:juwonchun@gmail.com')}
        >
          {isHover.name ? 'Contact' : 'Juwon'}
        </span>
      </div>
    </article>
  )
}

export default Intro
