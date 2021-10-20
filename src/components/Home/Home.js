import React from 'react'
// Components
import MovieListing from '../MovieListing/MovieListing'
// Redux
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../function/movies/movieSlice'
// Style
import './Home.scss'

const Home = () => {
	const dispatch = useDispatch()
	const movieText = 'Avengers'
	const showText = 'Marvel'
	React.useEffect(() => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])

	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	)
}

export default Home
