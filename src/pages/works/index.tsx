import React from 'react'
import ProjectCard from '../../components/project-card/ProjectCard'
import './index.scss'

function WorksPage(): JSX.Element {
    return (
        <section className="works-container">
            <div className="works-wrapper">
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
                <ProjectCard title="title" description={<div>test</div>}
                stacks={["react", "graphQL"]} url="www.dd"/>
            </div>
        </section>
    )
}

export default WorksPage