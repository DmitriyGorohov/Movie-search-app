import React from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'
import movieApi from '../../common/API/movieApi'
import { APIKey } from '../../common/API/MovieApiKey'

const Home = () => {
	React.useEffect(() => {
		const fetchMovies = async () => {
			const movieText = 'Harry'
			const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
				.catch((error) => {
					console.log(error);
				})
			console.log('response API', response);
		}
		fetchMovies()
	}, [])
	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	)
}

export default Home
