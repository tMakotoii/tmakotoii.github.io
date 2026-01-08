import { TitleWithDot } from "../../components/titleWithDot/TitleWithDot"
import { ProjectsList } from "../../components/projects/ProjectsList"
import { Footer } from "../../components/footer/Footer"

export const Projects = () => {
    return (
      <div className="main-plate py-8 px-2 pb-2">
            <div className="px-6">
                <TitleWithDot title="Проекты" className="pb-10" />
                <div className="flex flex-col gap-8 pb-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold">Мои проекты</h1>
                        <p className="text-lg">В этом разделе собраны одни из последних реализованных проектов. Каждый кейс демонстрирует мою работу "под ключ" - от первоначальной идеи и UI/UX дизайна до полноценной разработки функционального сайта и его последующего продвижения.</p>
                    </div>
                </div>
            </div>
            <ProjectsList isStatusBar={false} />
            <Footer />
        </div>
    )
}