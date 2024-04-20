import { Movie } from '@lib/types'
import React from 'react'

interface Props {
    movie: Movie
    closeModal: () => void
}

const Modal = ({ movie, closeModal }: Props) => {
  return (
    <div>Modal</div>
  )
}

export default Modal