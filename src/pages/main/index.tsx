import React, { useState } from 'react'
import './index.scss'
import clsx from 'clsx'
import PhotoBox from '../../components/PhotoBox'
import Intro from './Intro'

function MainPage():JSX.Element {
    const [isHover, setIsHover] = useState<IIsHover>({
        greet: false, iam: false, name: false
    })

    const handleMouseEnter = (field: string) => {
        setIsHover((prev) => ({...prev, [field]:true}))
    }

    const handleMouseLeave = (field: string) => {
        setIsHover((prev) => ({...prev, [field]: false}))
    }

    return(<section className="main-container">
        <article className="main-content">
            <div className="intro-box">
                <PhotoBox />
                <Intro isHover={isHover} onMouseEnter={(field: string) => handleMouseEnter(field)} onMouseLeave={(field:string) => handleMouseLeave(field)}/>
            </div>
        </article>
    </section>)
}

export interface IIsHover {
    greet: boolean
    iam: boolean
    name: boolean
}

export default MainPage