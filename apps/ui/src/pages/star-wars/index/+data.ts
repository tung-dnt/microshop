// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch'
import type { PageContextServer } from 'vike/types'

import type { Movie, MovieDetails } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (_pageContext: PageContextServer) => {
  await sleep(700) // Simulate slow network

  const response = await fetch(
    'https://brillout.github.io/star-wars/api/films.json',
  )
  const moviesData = (await response.json()) as MovieDetails[]

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  const movies = minimize(moviesData)

  return {
    movies,
    // The page's <title>
    title: `${movies.length} Star Wars Movies`,
  }
}

function minimize(movies: MovieDetails[]): Movie[] {
  return movies.map((movie) => {
    const { title, releaseDate, id } = movie

    return {
      title,
      releaseDate,
      id,
    }
  })
}

function sleep(milliseconds: number) {
  return new Promise((r) => setTimeout(r, milliseconds))
}
