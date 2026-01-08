import { ChevronRight } from '@gravity-ui/icons';
import type { ProjectPlateProps } from '../../types/project';

export const ProjectPlate = ({ project }: ProjectPlateProps) => {
    return (
        <div className="group shadow-hover flex flex-row gap-4 items-center bg-white rounded-2xl p-4">
            <div className="relative w-20 h-20 bg-gray-50 rounded-[64px] border border-gray-200 overflow-hidden
                shadow-[inset_0_0.8px_0.8px_0_rgba(0,0,0,0.08),inset_0_3.2px_6.4px_0_rgba(0,0,0,0.04)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-16 h-16 rounded-full overflow-hidden">
                    <img src={project.logo} className="w-full h-wull object-cover" />
                </div>
            </div>
            <div className="text-left flex flex-col gap-1.5">
                <h3 className="text-xl">{ project.title} </h3>
                <p>{ project.description }</p>
            </div>
            <ChevronRight className="ml-auto transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
        </div>
    )
}