import React from "react";
import ProjectCard, {
  ProjectCardIProps
} from "../../components/project-card/ProjectCard";
import "./index.scss";
import Codi from "../../assets/imgs/project-card/codi/codi1.png";
import CodeSketch from "../../assets/imgs/project-card/codesketch/codesketch1.png";
import Storybook from "../../assets/imgs/project-card/storybook/storybook1.png";

const projectData: ProjectCardIProps[] = [
  {
    title: "Codi-AI LMS",
    projectName: "codi",
    description:
      "선생님들이 수업 자료를 공유하고 코딩 관련 수업/커리큘럼을 수강하며 학교 SW수업 준비를 쉽고 편리하게 할 수 있도록 도와주는 LMS 서비스인 Codi AI(가칭)의 프론트엔드를 개발했습니다.",
    stacks: [
      "React",
      "TypeScript",
      "GraphQL Client",
      "React-Testing-Library",
      "Sonarqube"
    ],
    thumbnail: Codi
  },
  {
    title: "Codesketch",
    projectName: "codesketch",
    description:
      "자사의 신제품 CodeSketch 런칭에 따른 태블릿PC 앱 개발 프로젝트 중, 웹뷰 환경에서 사용될 스크래치 코딩용 웹IDE를 개발했습니다. 이 과정에서 주로 컴포넌트 제작 및 Swift, Android, Flutter 앱 개발자들과 모디 모듈-하드웨어-앱-웹뷰(IDE) 간 브릿지 통신을 위해 협업하였습니다.",
    stacks: ["React", "Redux", "Scratch"],
    thumbnail: CodeSketch
  },
  {
    title: "Storybook Design System",
    projectName: "storybook",
    description:
      "디자인 팀과 함께 Zeplin을 이용해 협업하며 자사의 새로운 버젼의 웹IDE에 쓰일 디자인 요소들을 컴포넌트화 했습니다.",
    stacks: ["React", "MobX", "Storybook"],
    thumbnail: Storybook
  },
  {
    title: "MODI Studio 유지보수",
    projectName: "studio",
    description:
      "2014년 회사 창립과 동시에 출시됐던 일렉트론 및 코도바 기반의 코딩 교육용 웹IDE인 모디 스튜디오를 유지보수 하는 업무를 맡아오고 있습니다.",
    stacks: ["Electron", "Cordova"]
  }
];

function WorksPage(): JSX.Element {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        {projectData.map((item, idx) => {
          return (
            <ProjectCard
              key={idx}
              title={item.title}
              projectName={item.projectName}
              description={item.description}
              stacks={item.stacks}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </section>
  );
}

export default WorksPage;
