import { baseImgUrl } from '@lib/constants'
import { Movie } from '@lib/types'
import React from 'react'

const MovieCard = ({ movie }: {movie: Movie}) => {
  return (
    <div className='movie-card'>
        <img 
        src={`${baseImgUrl}${
            movie?.backdrop_path || movie?.poster_path
          }`}
        className='thumbnail' 
        alt={movie?.title || movie?.name} />
    </div>
  )
}

export default MovieCard