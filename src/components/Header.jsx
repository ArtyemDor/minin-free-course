import logo from '../../public/logo-name.svg'

export default function Header() {
  //   const now = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  const now = new Date()

  return (
    <header>
      {/* <h3>Result university</h3> */}
      <img src={logo} alt="Result" />
      <span>{now.toLocaleTimeString()}</span>
    </header>
  )
}
