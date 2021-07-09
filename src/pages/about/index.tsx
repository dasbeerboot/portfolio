import React from 'react'
import './index.scss'

function AboutPage(): JSX.Element {
    return (
        <section className="about-container">
            <article className="about-content">
                <div className="gummy-bear-is-the-best">
                I drink beer with gummy bear
                </div>
                <div className="bio">
                    안녕하세요,
                    키보디스트부터 번역가 및 영어 교사, 블록체인 마케터까지 여러 직업을 거쳐오다 드디어 개발자로 정착해 먹고 살기로 결심한, 2년차 프론트엔드 개발자 천주원입니다.
                    독일에서 마케터로 일하며 freeCodeCamp를 참고해 처음 개발공부를 시작했고, 현재는 로봇 융합 에듀테크 스타트업인 럭스로보에서 프론트엔드 개발자로 일하며 컴퓨터 과학의 본질에 갈등을 느껴 방송통신대학교에 편입해 4학년에 재학중인 헌내기이기도 합니다.
                </div>
            </article>
        </section>
    )
}

export default AboutPage