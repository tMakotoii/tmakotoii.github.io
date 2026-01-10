import { useParams } from "react-router-dom"
import { getProjectById } from "../../data/projectsConfig"
import { Navigate } from "react-router-dom"
import { Footer } from "../../components/footer/Footer"

export const SoloProject = () => {
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Navigate to="/" replace />
    }

    const project = getProjectById(id)

    if (!project) {
        return <Navigate to="/" replace />
    }

    return (
      <div className="main-plate py-8 px-2 pb-2">
            <div className="px-6 flex flex-col">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={project.logo} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col pb-10">
                        <h1 className="text-4xl font-bold pt-6">{project.name}</h1>
                        <p className="pt-6">{project.texts[0]}</p>
                        <img className="pt-8" src={project.images[0]} />
                        <h2 className="text-2xl font-bold pt-10">Проблема</h2>
                        <p className="pt-5">{project.texts[1]}</p>
                        <img className="pt-8" src={project.images[1]} />
                        <h2 className="text-2xl font-bold pt-10">Моё решение</h2>
                        <p className="pt-5">{project.texts[2]}</p>
                        <img className="pt-8" src={project.images[2]} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}