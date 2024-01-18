import { createPortal } from 'react-dom'
import './Modal.css'
import { useRef, useEffect } from 'react'

export default function Modal({ children, open }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open]) //массив зависимостей - эффект смотрит, когда изменяются зависимости и запускает код

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById('modal')
  )
}
