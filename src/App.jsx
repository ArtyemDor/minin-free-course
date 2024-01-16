import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { ways, differences } from './data.js'
import { useState } from 'react'

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way, index) => (
              //   <WayToTeach
              //     title={way['title']}
              //     description={way.description}
              //     key={index}
              //   />
              <WayToTeach {...way} />
            ))}
            {/* <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            /> */}
            {/* <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} /> */}
          </ul>
        </section>
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

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}

          {/* {contentType ? <p>{differences[contentType]}</p> : null} */}
          {/* {!contentType ? <p>Нажми на кнопку</p> : null} */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  )
}
