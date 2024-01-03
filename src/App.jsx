import { Route, Routes } from 'react-router-dom'

import Navbar from "./Component/Pages/Navbar"
import Footer from "./Component/Pages/Footer"
import AboutPages from './Component/Pages/AboutPages'
import CoursesPages from './Component/Pages/CoursesPages'
import AllProvinsi from './Component/Pages/AllProvinsi'
import ProvinsiPage from './Component/Pages/ProvinsiPage'
import Home from './Component/Pages/Home'


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={AboutPages} />
        <Route path='/courses' Component={CoursesPages} />
        <Route path='/provinsi/:id' Component={AllProvinsi} />
        <Route path='/materi/:id' Component={ProvinsiPage} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
