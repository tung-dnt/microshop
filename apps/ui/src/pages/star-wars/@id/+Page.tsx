export { Page }

import { useData } from '../../../hooks/useData'

import type { Data } from './+data'

function Page() {
  const { movie } = useData<Data>()

  return (
    <>
      <h1>{movie.title}</h1>
      Release Date: {movie.releaseDate}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </>
  )
}
