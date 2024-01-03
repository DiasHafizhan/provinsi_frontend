const Pages = (props) => {
  const {children, classname} = props

  return (
    <div className={`max-w-[1150px] container mt-[60px] p-4 flex gap-7 ${classname}`}>
      {children}
    </div>
  )
}

const Header = (props) => {
  const {children} = props
  return (
    <h1 className="w-1/2 text-3xl font-bold">
      {children}
    </h1>
  )
}

const Footer = (props) => {
  const {children} = props
  return (
    <p className="w-1/2 text-sm">
      {children}
    </p>
  )
}

Pages.Header = Header
Pages.Footer = Footer

export default Pages