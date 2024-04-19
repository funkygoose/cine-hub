import { baseImgUrl } from '@lib/constants'
import { Movie } from '@lib/types'
import React from 'react'

const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  console.log(trendingMovie);
  
  return (
    <div className='hero'>
      <div className='hero-bg'>
        <img 
        src={`${baseImgUrl}
        ${trendingMovie?.backdrop_path || trendingMovie?.poster_path}`} />
      </div>
    </div>
  )
}

export default HeroCard