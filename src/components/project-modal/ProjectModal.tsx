import React from 'react'
import './ProjectModal.scss'
import * as CodiImgs from '@assets/imgs/project-card/codi'
import * as StorybookImgs from '@assets/imgs/project-card/storybook'
import * as TrippyImgs from '@assets/imgs/project-card/trippy'
import * as TrippyArtImgs from '@assets/imgs/project-card/trippy-art'
import CodeSketchImg from '@assets/imgs/project-card/codesketch/codesketch1.png'
import AngelleagueImg from '@assets/imgs/project-card/angelleague/angelleague1.png'
import { ClickAwayListener, Dialog } from '@material-ui/core'

export interface ProjectModalIProps {
  projectName: string
  isOpen: boolean
  closeModal: () => void
}

function ProjectModal({ projectName, isOpen, closeModal }: ProjectModalIProps): JSX.Element {
  const renderImgs = () => {
    switch (projectName) {
      case 'trippy':
        return (
          <>
            <img className="imgs" src={TrippyImgs.Trippy1} />
            <img className="imgs" src={TrippyImgs.Trippy2} />
            <img className="imgs" src={TrippyImgs.Trippy3} />
            <img className="imgs" src={TrippyImgs.Trippy4} />
            <img className="imgs" src={TrippyImgs.Trippy5} />
          </>
        )
      case 'trippy-art':
      return (
        <>
          <img className="imgs" src={TrippyArtImgs.TrippyArt1} />
          <img className="imgs" src={TrippyArtImgs.TrippyArt2} />
          <img className="imgs" src={TrippyArtImgs.TrippyArt3} />
          <img className="imgs" src={TrippyArtImgs.TrippyArt4} />
        </>
      )

      case 'angelleague':
      return (
        <>
          <img className="imgs" src={AngelleagueImg} />
        </>
      )

      case 'codi':
        return (
          <>
            <img className="imgs" src={CodiImgs.Codi1} />
            <img className="imgs" src={CodiImgs.Codi2} />
            <img className="imgs" src={CodiImgs.Codi3} />
            <img className="imgs" src={CodiImgs.Codi4} />
            <img className="imgs" src={CodiImgs.Codi5} />
          </>
        )

      case 'storybook':
        return (
          <>
            <img className="imgs" src={StorybookImgs.Storybook1} />
            <img className="imgs" src={StorybookImgs.Storybook2} />
            <img className="imgs" src={StorybookImgs.Storybook3} />
            <img className="imgs" src={StorybookImgs.Storybook4} />
          </>
        )

      case 'codesketch':
        return (
          <>
            <img src={CodeSketchImg} />
          </>
        )
      default:
        return <></>
    }
  }
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={closeModal}>
        <div className="img-container">{renderImgs()}</div>
      </ClickAwayListener>
    </Dialog>
  )
}

export default ProjectModal
