import React from 'react';
import ProjectsComponent from '../../components/Projects/ProjectsComponent/ProjectComponent';
import {v4 as uuid} from 'uuid';
import {Button, ButtonType} from '../../components/common/Button/Button.styles';
import {AddRemoveAnimation} from '../../components/common/Animation/AddRemoveAnimation.styled';
import {ProjectPageStyled, ProjectsRowStyled} from './ProjectsPage.styled';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import GridRow from '../../components/common/GridRow/GridRow';
import {IProject} from '../../configs/resume/MyResume';

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
      return !project.technologies.value.includes(props.projectFilter)
    }
  };

  return (
    <>
      <NavigationBar/>
      <ProjectPageStyled data-id="ProjectPageStyled">
          <GridRow columns={8}>
            <Button
              active={!props.projectFilter}
              type={ButtonType.link}
              textId="showAll"
              onClick={e => props.setProjectsFilter(null)}/>
            {props.technologies.map(technology =>
              <Button
                key={technology}
                type={ButtonType.link}
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
      </ProjectPageStyled>
    </>

  )
};

export default ProjectsPage;