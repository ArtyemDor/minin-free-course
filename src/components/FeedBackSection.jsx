import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default function FeedBackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help',
  })

  //   const [name, setName] = useState('')
  //   const [hasError, setHasError] = useState(false)
  //   const [reason, setReason] = useState('help')

  function handleNameChange(e) {
    //  setName(e.target.value)
    //  setHasError(e.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }))
  }

  function toggleError() {
    setForm({
      ...form,
      hasError: (prev) => !prev,
    })
    //  setHasError((prev) => !prev) //false - без рендоринга сразу меняет
    // setHasError(!hasError)     //true - повторно так будет брать из состояния и не учитывать перерендоринг
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <Button onClick={toggleError}>Toggle Error</Button>

      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          style={{ border: form.hasError ? '1px solid red' : null }}
          className="control"
          type="text"
          id="name"
          value={form.name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        {/* <pre>
          name: {form.name}
          <br />
          reason: {form.reason}
        </pre> */}

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
      <StateVsRef />
    </section>
  )
}
