'use client'

import { Movie, Video } from '@lib/types'
import { CancelRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

interface Props {
    movie: Movie
    closeModal: () => void
}

const Modal = ({ movie, closeModal }: Props) => {
    const [video, setVideo] = useState("")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        }
    };

    const getMovieDetails = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`, options)
            const data = await res.json()

            if (data?.videos) {
                const index = data.videos.results.findIndex((video: Video) => video.type === 'Trailer')
                setVideo(data.videos.results[index].key)
            }

        } catch (err) {

        }
    }

    useEffect(() => {
        getMovieDetails()
    }, [movie])

    return (
        <div className='modal'>
            <button className='modal-close' onClick={closeModal}>
                <CancelRounded sx={{ color: "white", fontSize: "35px", ":hover": { color: "red" } }} />
            </button>

            <iframe
                src={`https://www.youtube.com/embed/${video}`}
                className="modal-video"
                loading="lazy"
                allowFullScreen
            />
        </div>
    )
}

export default Modal