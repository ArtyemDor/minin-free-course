import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from '../hooks/useInput'

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setUsers(users)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)} style={{ marginBottom: '1rem' }}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          voluptas?
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h4>{input.value}</h4>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
