import React, { useEffect, useState } from 'react'
import './ProjectCard.scss'
import ProjectDefault from '../../assets/imgs/project-card/project-default.svg'
import ProjectModal from '../project-modal/ProjectModal'

export interface ProjectCardIProps {
  title: string
  projectName: string
  description: JSX.Element | string
  stacks: string[]
  thumbnail?: string
}

function ProjectCard({
  title,
  projectName,
  description,
  stacks,
  thumbnail,
}: ProjectCardIProps): JSX.Element {
  const [isHover, setIsHover] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const renderDefault = () => {
    return (
      <div className="default-card">
        <img className="project-img" src={thumbnail ? thumbnail : ProjectDefault} />
      </div>
    )
  }

  const renderHover = () => {
    return (
      <div className="hover-card">
        <div className="img-wrapper">
          <img className="project-img" src={thumbnail ? thumbnail : ProjectDefault} />
        </div>
        <div className="hover-content">
          <div className="content-wrapper">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="stacks">
              {stacks.map((item, idx) => {
                if (idx === stacks.length - 1) {
                  return `#${item}`
                } else {
                  return `#${item}, `
                }
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (isModalOpen) {
      setIsHover(false)
    }
  })

  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onTouchEnd={() => setIsHover(!isHover)}
      onClick={projectName !== 'studio' ? () => setIsModalOpen(true) : undefined}
    >
      {isHover ? renderHover() : renderDefault()}
      <ProjectModal
        projectName={projectName}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ProjectCard
