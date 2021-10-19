import React from 'react'
// Components
import MovieListing from '../MovieListing/MovieListing'
// API
import movieApi from '../../common/API/movieApi'
import { APIKey } from '../../common/API/MovieApiKey'
// Redux
import { useDispatch } from 'react-redux'
import { addMovies } from '../../function/movies/movieSlice'
// Style
import './Home.scss'

const Home = () => {
	const movieText = 'Batman'
	const dispatch = useDispatch()

	React.useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
				dispatch(addMovies(response.data))
			} catch (error) {
				alert('Произошла ошибка...', error)
			}
		}

		fetchMovies()

	}, [dispatch])

	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	)
}

export default Home
