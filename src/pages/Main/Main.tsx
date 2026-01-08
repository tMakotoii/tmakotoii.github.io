import { Hero } from '../../components/hero/Hero'
import { ProjectsList } from '../../components/projects/ProjectsList'
import { StatusBar } from '../../components/statusBar/StatusBar'
import { Footer } from '../../components/footer/Footer'

export const Main = () => {
    return (
      <div className="main-plate py-8 px-2 pb-2">
        <StatusBar />
        <Hero />
        <ProjectsList isStatusBar={true} />
        <Footer />
      </div>
    )
}