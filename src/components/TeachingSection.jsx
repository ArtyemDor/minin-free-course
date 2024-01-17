import WayToTeach from './WayToTeach'
import { ways } from '../data.js'

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way, index) => (
          <WayToTeach {...way} key={index} />
        ))}
      </ul>
    </section>
  )
}
