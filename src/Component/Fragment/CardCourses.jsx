import { Navigate, useNavigate } from "react-router-dom"
import Button from "../Element/button"

const CardCourses = (props) => {
  const { children } = props

  let navigation = useNavigate()

  return (
    <div className="p-5 lg:w-[48%] bg-white shadow-sm rounded-lg">
      {children}
    </div>
  )
}

const Header = (props) => {
  const { image, btn1, btn2, name } = props

  return (
    <div className="">
      <img src={image} className="w-full" alt="" />
      <div className="mt-5 lg:flex lg:justify-between">
        <div className="flex gap-5">
          <Button classname="px-5 py-2 bg-transparent shadow-sm text-base text-slate-500">
            {btn1}
          </Button>
          <Button classname="px-5 py-2 bg-transparent shadow-sm text-base text-slate-500">
            {btn2}
          </Button>
        </div>
        <h4 className="mt-5">
          {name}
        </h4>
      </div>
    </div>
  )
}

const Body = (props) => {
  const { title, children } = props

  return (
    <div className="mt-8">
      <h2 className="mb-3 text-xl font-semibold">
        {title}
      </h2>
      <p className="text-base min-h-[120px]">
        {children}
      </p>
    </div>
  )
}

CardCourses.Header = Header
CardCourses.Body = Body

export default CardCourses