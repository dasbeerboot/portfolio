import React from 'react'
import './PhotoBox.scss'
import ProfilePic from '../../assets/imgs/profile-pic.png'

function PhotoBox():JSX.Element {
    return (
        <div className="photo-box">
            <img className="profile-pic" src={ProfilePic}></img>
        </div>
    )
}

export default PhotoBox