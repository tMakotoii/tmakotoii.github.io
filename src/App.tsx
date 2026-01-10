import './App.css'
import { Main } from './pages/Main/Main'
import { About } from './pages/About/About'
import { Header } from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects/Projects'
import { SoloProject } from './pages/SoloProject/SoloProject'
import ScrollToTop from './components/scrollToTop/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="max-w-xl mx-auto pb-10">
      <Header />
      <Routes>
          <Route path="/" element={ <Main /> } /> 
          <Route path="/about" element={ <About /> } /> 
          <Route path="/projects/:id" element={ <SoloProject /> } /> 
          <Route path="/projects" element={ <Projects /> } /> 
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
