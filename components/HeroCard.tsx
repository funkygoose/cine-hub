import { baseImgUrl } from '@lib/constants'
import { Movie } from '@lib/types'
import { PlayCircleOutlineOutlined } from '@mui/icons-material'
import React from 'react'

const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  console.log(trendingMovie)
  
  return (
    <div className='hero'>
      <div className='hero-bg'>
        <img 
        src={`${baseImgUrl} 
        ${trendingMovie?.backdrop_path || trendingMovie?.poster_path}`} 
        alt="trending-movie" 
        className='hero-bg-image'/>
      </div>
       <h1 className="hero-title">{trendingMovie?.title || trendingMovie?.name}</h1>
       <p className="herp-overview">{trendingMovie?.overview}</p>
       <div className="hero-btns">
        <button>
          <PlayCircleOutlineOutlined />
        </button>
       </div>
    </div>
  )
}

export default HeroCard