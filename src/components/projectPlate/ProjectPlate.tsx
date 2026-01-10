import { ChevronRight } from '@gravity-ui/icons';
import type { ProjectPlateProps } from '../../types/project';

export const ProjectPlate = ({ project }: ProjectPlateProps) => {
    return (
        <div className="group shadow-hover relative flex flex-col  md:flex-row gap-4 md:items-center bg-white rounded-2xl p-4">
            <div className="relative md:w-20 md:h-20 w-18 h-18 bg-gray-50 rounded-[64px] border border-gray-200 overflow-hidden
                shadow-[inset_0_0.8px_0.8px_0_rgba(0,0,0,0.08),inset_0_3.2px_6.4px_0_rgba(0,0,0,0.04)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14
                  md:w-16 md:h-16 rounded-full overflow-hidden">
                    <img src={project.logo} className="w-full h-wull object-cover" />
                </div>
            </div>
            <div className="text-left flex flex-col gap-1.5">
                <h3 className="text-xl font-medium">{ project.title} </h3>
                <p>{ project.description }</p>
            </div>
            <ChevronRight className="absolute top-1/2 right-4 -translate-y-1/2 md:block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
        </div>
    )
}