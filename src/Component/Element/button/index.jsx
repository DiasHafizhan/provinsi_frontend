const Button = (props) => {
  const { children, classname, onClick = () => { } } = props


  return (
    <button className={`${classname} rounded-lg`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button