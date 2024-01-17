import { useState } from 'react'
import Button from './Button/Button'

const FeedBackSection = () => {
  const [name, setName] = useState('')
  const [hasError, setHasError] = useState(false)
  const [reason, setReason] = useState('help')

  function handleNameChange(e) {
    setName(e.target.value)
    setHasError(e.target.value.trim().length === 0)
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          style={{ border: hasError ? '1px solid red' : null }}
          className="control"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          name: {name}
          <br />
          reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
    </section>
  )
}

export default FeedBackSection
