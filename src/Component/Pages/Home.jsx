import About from "../Fragment/About"
import Courses from "./Courses"
import Peta from "./Peta"


const Home = () => {
  return (
    <div className="">
      <div className="hero">
        <div className="">
          <div className="flex justify-center items-center w-full h-[95vh] text-center my-auto">
            <h1 className="text-white lg:text-3xl text-lg font-bold">
              Seberapa Kenal Anda Terhadap Indonesia
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <Peta/>
        <About/>
        <Courses/>
      </div>
    </div>
  )
}

export default Home