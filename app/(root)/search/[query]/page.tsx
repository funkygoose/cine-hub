import Navbar from '@components/Navbar'
import React from 'react'

const searchPage = ({ params }: { params: { query: string } }) => {
    const search = params.query
  return (
    <>
    <Navbar />
    <SearchResults search={search}
    </>
  )
}

export default searchPage