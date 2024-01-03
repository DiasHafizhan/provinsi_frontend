import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-20 container">
      <h1 className="text-4xl font-bold">
        About
        <span className="text-4xl font-bold text-primary"> Us</span>
      </h1>
      <div className="lg:flex lg:gap-8 lg:justify-center lg:items-center ">
        <div className="w-full lg:w-3/5 mt-8 mb-10">
          <img src="./public/about.png" alt="" className="w-full rounded-lg" />
        </div>
        <div className="bg-transparent shadow-sm rounded-lg lg:w-1/2 px-10 py-16">
          <h2 className="text-2xl font-bold">consectetur adipiscing elit</h2>
          <p className="mt-10">
            blandit libero volutpat sed cras ornare arcu. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Aliquam vestibulum morbi blandit cursus. Non enim praesent elementum facilisis leo vel fringilla est. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sit amet mauris commodo quis imperdiet massa tincidunt.
          </p>
          <div className="flex gap-2 items-center mt-10">
            <Link to={"/about"}>
              Baca
              <span className="text-primary"> Selengkapnya</span>
            </Link>
            <i className='bx bx-chevron-right text-lg'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About