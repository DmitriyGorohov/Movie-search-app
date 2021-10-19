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

	React.useEffect(() => {
		dispatch(fetchAsyncMovies())
		dispatch(fetchAsyncShows())
	}, [dispatch])

	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	)
}

export default Home
