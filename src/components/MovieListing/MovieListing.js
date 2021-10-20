import React from 'react'
// Component
import MovieCard from '../MovieCard/MovieCard'
// React-slick
import Slider from 'react-slick'
import { Settings } from '../../common/setting'
// Redux
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../function/movies/movieSlice'
// Style
import './MovieListing.scss'

const MovieListing = () => {
	const movies = useSelector(getAllMovies)
	const shows = useSelector(getAllShows)
	let renderingMovies,
		renderingShows = ''

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

	renderingShows =
		shows.Response === 'True' ? (
			shows.Search.map((movie) => {
				return <MovieCard key={movie.imdbID} data={movie} />
			})
		) : (
			<div className='movies-error'>
				<h3>{shows.Error}</h3>
			</div>
		)

	return (
		<div className='movie-wrapper'>
			<div className='movie-list'>
				<h2>Movies</h2>
				<div className='movie-container'>
					<Slider {...Settings}>{renderingMovies}</Slider>
				</div>
			</div>
			<div className='show-list'>
				<h2>Shows</h2>

				<div className='show-container'>
					<Slider {...Settings}>{renderingShows}</Slider>
				</div>
			</div>
		</div>
	)
}

export default MovieListing
