import './Button.css'

const Button = ({ children, onClick, isActive }) => {
  return (
    <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
