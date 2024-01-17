import { useState } from 'react'
import { differences } from '../data.js'
import Button from './Button/Button'

const DifferencesSection = () => {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === 'way' ? true : false}
        onClick={() => handleClick('way')}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === 'easy' ? true : false}
        onClick={() => handleClick('easy')}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === 'program' ? true : false}
        onClick={() => handleClick('program')}
      >
        Концентрация
      </Button>

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}

export default DifferencesSection
