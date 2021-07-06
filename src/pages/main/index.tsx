import React, { useState } from 'react'
import './index.scss'
import PhotoBox from '../../components/PhotoBox'
import Intro from './Intro'
import { useHistory } from 'react-router-dom'
import Bio from './bio'

function MainPage():JSX.Element {
    const history = useHistory()
    const [isHover, setIsHover] = useState<IIsHover>({
        greet: false, iam: false, name: false
    })

    const handleMouseEnter = (field: string) => {
        setIsHover((prev) => ({...prev, [field]:true}))
    }

    const handleMouseLeave = (field: string) => {
        setIsHover((prev) => ({...prev, [field]: false}))
    }

    const handleGoPage = (field: string) => {
        history.push(`portfolio/${field}`)
    }

    return(<section className="main-container">
        <article className="main-content">
            <PhotoBox />
            <Intro
                isHover={isHover}
                onMouseEnter={(field: string) => handleMouseEnter(field)} onMouseLeave={(field:string) => handleMouseLeave(field)} onGoPage={(field:string) => handleGoPage(field)}
            />
            {/* <div className="bio-box"> */}
                <Bio />
            {/* </div> */}
        </article>
    </section>)
}

export interface IIsHover {
    greet: boolean
    iam: boolean
    name: boolean
}

export default MainPage