import { ProjectPlate } from '../projectPlate/ProjectPlate'
import { TitleWithDot } from '../titleWithDot/TitleWithDot';
import { Link } from 'react-router-dom';
import { projectConfig } from '../../data/projectsConfig';
import type { ProjectListProps } from '../../types/project';

export const ProjectsList: React.FC<ProjectListProps> = ({ isStatusBar }) => {
    
    return (
        <div className="flex flex-col gap-6 bg-secondary rounded-xl p-6">
            { isStatusBar && <TitleWithDot title="Проекты" /> }
            <div className="flex flex-col gap-2">
                {projectConfig.map((project) => {
                    return (
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <ProjectPlate project={project} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}