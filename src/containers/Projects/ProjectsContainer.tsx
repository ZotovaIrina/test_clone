import ProjectsPage from './ProjectsPage';
import {IStore} from '../../store/Store';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import getConfig, {AppConfigs} from '../../configs/getConfig';
import IProject from '../../configs/resume/projects';


const mapStateToProps = (state: IStore) => ({
  projects: getConfig(AppConfigs.myResume, 'projects') as IProject[]
});

const mapDispatchToProps = () => ({
});

const ProjectsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectsPage) as any
);

export default ProjectsContainer;