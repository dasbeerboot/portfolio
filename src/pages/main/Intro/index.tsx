import React, { useState } from 'react'
import './index.scss'
import { IIsHover } from '..'

interface IntroIProps {
    isHover: IIsHover
    onMouseEnter: (field:string) => void
    onMouseLeave: (field:string) => void
}


function Intro({isHover, onMouseEnter, onMouseLeave}: IntroIProps):JSX.Element {
    return(
        <article className="intro">
            <span className="greet"
            onMouseEnter={() => onMouseEnter("greet")
            }
            onMouseLeave={() => onMouseLeave("greet")}
            >
                {
                    isHover.greet ?
                    'About'
                    : 'Hello.'
                }
            </span>
            <span className="iam"
            onMouseEnter={() => onMouseEnter("iam")
            }
            onMouseLeave={() => onMouseLeave("iam")}
            >
                {
                    isHover.iam ? 
                    'Works' 
                    : 'I am'
                }
            </span>
            <span className="name"
            onMouseEnter={() => onMouseEnter("name")
            }
            onMouseLeave={() => onMouseLeave("name")}
            >
                {
                    isHover.name ?
                    'Contact'
                    : 'Juwon'
                }
            </span>
        </article>
    )
}

export default Intro