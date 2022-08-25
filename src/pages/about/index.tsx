import React from "react";
import "./index.scss";

function AboutPage(): JSX.Element {
  return (
    <section className="about-container">
      <article className="about-content">
        <div className="bio">
          <p>안녕하세요,</p>
          <p>
            애정을 가지고 지속 가능한 커리어를 찾아 <br />
            키보디스트부터 번역가 및 영어 교사, 블록체인 마케터까지 여러 직업을
            거쳐오다 <br />
            드디어 개발자로 정착해 먹고 살기로 결심한, <br />
            아직까지는 코딩이 여행만큼 재미있는 3년차 프론트엔드 개발자
            천주원입니다.
          </p>
          <p>
            독일에서 마케터로 일하며 freeCodeCamp를 참고해 처음 개발공부를
            시작했고, <br />
            한국으로 돌아와 개발자로 일하며
            <br /> 컴퓨터 과학의 본질에 갈증을 느껴 방송통신대학교
            컴퓨터과학과에 편입해
            <br />
            4학년에 재학중인 헌내기이기도 합니다.
          </p>
        </div>
        <div className="gummy-bear-is-the-best">
          {`/*`} I drink beer with gummy bears. {`*/`}
        </div>
      </article>
    </section>
  );
}

export default AboutPage;
