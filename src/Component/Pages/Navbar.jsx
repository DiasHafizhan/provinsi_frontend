import React from "react"
import { nav } from "../data"
import Button from "../Element/button"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <div className="w-11/12 justify-center shadow-sm bg-white rounded-lg lg:w-10/12 mt-8 mb-8 z-50 sticky left-[8%]">
      <div className="p-2 flex justify-between">
        <div className="flex items-center gap-5">
          <div className="">
            <img src="./public/logo.png" alt="" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              {nav.map((data) => {
                return (
                  <li key={data.id}>
                    <Link to={data.path} className="px-3 py-2 rounded-lg mx-2">
                      {data.pages}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Button classname="bg-transparent">Sign Up</Button>
          <Button classname="text-white px-6 py-2 bg-primary">Login</Button>
          <div className="lg:hidden">
            <i className='bx bx-menu-alt-right text-4xl'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar