import React from 'react';
import IProject from '../../configs/resume/projects';
import ProjectsComponent from '../../components/Projects/ProjectsComponent/ProjectComponent';
import {v4 as uuid} from 'uuid';
import Button from '../../components/common/Button/Button.styles';
import {AddRemoveAnimation} from '../../components/common/Animation/AddRemoveAnimation.styled';
import {ProjectPageStyled, ProjectsRowStyled} from './ProjectsPage.styled';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import {H1, H3} from '../../components/common/Text/Text.styled';
import GridRow from '../../components/common/GridRow/GridRow';

export interface IProjectsPage {
  projects: IProject[],
  projectFilter: string | null,
  technologies: string[],
  setProjectsFilter: (filter: string | null) => void
}

const ProjectsPage: React.FunctionComponent<IProjectsPage> = props => {

  const hideProject = (project: IProject): boolean => {
    if (!props.projectFilter || !project.technologies) {
      return false
    } else {
      return !project.technologies.includes(props.projectFilter)
    }
  };

  return (
    <>
      <NavigationBar/>
      <ProjectPageStyled data-id="ProjectPageStyled">
        <H1>Projects</H1>
        <div>
          <H3>Technologies:</H3>
          <GridRow columns={8}>
            <Button
              active={!props.projectFilter}
              onClick={e => props.setProjectsFilter(null)}>
              Show All
            </Button>
            {props.technologies.map(technology =>
              <Button
                key={technology}
                active={props.projectFilter === technology}
                onClick={e => props.setProjectsFilter(technology)}>
                {technology}
              </Button>
            )}
          </GridRow>
          <ProjectsRowStyled data-id="ProjectsRowStyled">
            {
              props.projects
                .map((project: IProject) =>
                  <AddRemoveAnimation key={project.name} defaultWidth={'33.33%'} hide={hideProject(project)}
                                      data-id="AddRemoveAnimation">
                    <ProjectsComponent key={uuid()} project={project}/>
                  </AddRemoveAnimation>
                )
            }
          </ProjectsRowStyled>
        </div>
      </ProjectPageStyled>
    </>

  )
};

export default ProjectsPage;