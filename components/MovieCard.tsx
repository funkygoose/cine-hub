'use client'
import { baseImgUrl } from '@lib/constants'
import { Movie } from '@lib/types'
import React, { useState } from 'react'
import Modal from './Modal';

const MovieCard = ({ movie }: { movie: Movie }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <>
            <div className='movie-card' onClick={openModal}>
                <img
                    src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path
                        }`}
                    className='thumbnail'
                    alt={movie?.title || movie?.name} />
                <div className="border"></div>
            </div>

            {showModal && <Modal movie={movie} closeModal={closeModal} />}
        </>
    )
}

export default MovieCard