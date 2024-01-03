import Button from "../Element/button"
import { useNavigate } from "react-router-dom"

const Wrapper = (props) => {
  const { children, classname } = props


  return (
    <div className={`${classname}`}>
      {children}
    </div>
  )
}

const Header = (props) => {
  const { children, classname } = props
  return (
    <div className={`${classname}`}>
      <h1 className="text-3xl font-semibold">
        {children}
      </h1>
    </div>
  )
}

const Body = (props) => {
  const { children, onclick } = props
  let navigate = useNavigate()

  return (
    <div className="w-full lg:flex lg:justify-between lg:items-center mt-5">
      <p className="font-base w-5/6">
        {children}
      </p>
      <Button
        classname="mt-5 py-3 px-5 bg-btn shadow-sm text-base"
        onClick={onclick}
      >
        View All
      </Button>
    </div>
  )
}

Wrapper.Header = Header
Wrapper.Body = Body

export default Wrapper