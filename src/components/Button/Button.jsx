import './Button.css'

const Button = ({ children, onClick, isActive }) => {
  //   let classes = 'button'
  //   if (isActive) classes += ' active'

  return (
    //  <button className={classes} onClick={onClick}>
    <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
      {children}
    </button>
  )
}

// onMouseEnter={handleMouseEnter}

export default Button
