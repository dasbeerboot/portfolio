import React, { useState } from "react";
import "./ProjectCard.scss";
import ProjectDefault from "../../assets/imgs/project-card/project-default.svg";
import Test from "../../assets/imgs/project-card/codi/codi1.png";

export interface ProjectCardIProps {
  title: string;
  projectName: string;
  description: JSX.Element | string;
  stacks: string[];
  thumbnail?: string;
}

function ProjectCard({
  title,
  projectName,
  description,
  thumbnail
}: ProjectCardIProps): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const renderDefault = () => {
    return (
      <div className="default-card">
        <img
          className="project-img"
          src={thumbnail ? thumbnail : ProjectDefault}
        />
      </div>
    );
  };

  const renderHover = () => {
    return (
      <div className="hover-card">
        <div>
          <span>{title}</span>
        </div>
        <div>{description}</div>
      </div>
    );
  };
  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? renderHover() : renderDefault()}
    </div>
  );
}

export default ProjectCard;
