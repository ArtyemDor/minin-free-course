import './Button.css'

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

// onMouseEnter={handleMouseEnter}

export default Button
