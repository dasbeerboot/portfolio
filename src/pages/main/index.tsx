import React from 'react'
import PhotoBox from '../../components/PhotoBox'
import './index.scss'

function MainPage():JSX.Element {
    return(<section className="main-container">
        <article className="main-content">
            <div className="intro-box">
                <PhotoBox />
                <div className="intro">
                    <span className="greet">Hello.</span>
                    <span className="i-am">I am</span>
                    <span className="name">Juwon</span>
                </div>
            </div>
        </article>
    </section>)
}

export default MainPage