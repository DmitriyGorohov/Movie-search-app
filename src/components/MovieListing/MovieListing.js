import React from 'react'
// Component
import MovieCard from '../MovieCard/MovieCard'
// Redux
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../function/movies/movieSlice'
// Styled
import './MovieListing.scss'

const MovieListing = () => {
	const movies = useSelector(getAllMovies)
	let renderingMovies = ''

	renderingMovies =
		movies.Response === 'True' ? (
			movies.Search.map((movie) => {
				return <MovieCard key={movie.imdbID} data={movie} />
			})
		) : (
			<div className='movies-error'>
				<h3>{movies.Error}</h3>
			</div>
		)
	return (
		<div className='movie-wrapper'>
			<div className="movie-list">
				<h2>Movies</h2>
				<div className="movie-container">
					{renderingMovies}
				</div>
			</div>
		</div>
	)
}

export default MovieListing
