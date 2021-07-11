import React from "react";
import "./ProjectModal.scss";
import * as CodiImgs from "../../assets/imgs/project-card/codi/index";
import * as StorybookImgs from "../../assets/imgs/project-card/storybook/index";
import CodeSketchImg from "../../assets/imgs/project-card/codesketch/codesketch1.png";
import { ClickAwayListener, Dialog } from "@material-ui/core";

export interface ProjectModalIProps {
  projectName: string;
  isOpen: boolean;
  closeModal: () => void;
}

function ProjectModal({
  projectName,
  isOpen,
  closeModal
}: ProjectModalIProps): JSX.Element {
  const renderImgs = () => {
    switch (projectName) {
      case "codi":
        return (
          <>
            <img className="imgs" src={CodiImgs.Codi1} />
            <img className="imgs" src={CodiImgs.Codi2} />
            <img className="imgs" src={CodiImgs.Codi3} />
            <img className="imgs" src={CodiImgs.Codi4} />
            <img className="imgs" src={CodiImgs.Codi5} />
          </>
        );

      case "storybook":
        return (
          <>
            <img className="imgs" src={StorybookImgs.Storybook1} />
            <img className="imgs" src={StorybookImgs.Storybook2} />
            <img className="imgs" src={StorybookImgs.Storybook3} />
            <img className="imgs" src={StorybookImgs.Storybook4} />
          </>
        );

      case "codesketch":
        return (
          <>
            <img src={CodeSketchImg} />
          </>
        );
      default:
        return <></>;
    }
  };
  return (
    <Dialog open={isOpen}>
      <ClickAwayListener onClickAway={closeModal}>
        <div className="img-container">{renderImgs()}</div>
      </ClickAwayListener>
    </Dialog>
  );
}

export default ProjectModal;
