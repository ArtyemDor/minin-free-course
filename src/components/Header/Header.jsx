import { useEffect, useState } from 'react'
import logo from '../../logo-name.svg'
// import './Header.css'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0 2rem;
  background: #fafafa;
`

export default function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => {
      clearInterval(interval)
      console.log('clear') //срабатывает, если в App включаем закоменченный таймоут
    }
  }, [])

  return (
    <HeaderContainer>
      <img src={logo} alt="Result" />
      <span>{now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}
