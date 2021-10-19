import React from 'react'

import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShowDetail, getSelectMovieOrShow } from '../../function/movies/movieSlice'

const MovieDetail = () => {
	const { imdbID } = useParams()
	const dispatch = useDispatch()
	const data = useSelector(getSelectMovieOrShow)
	console.log(data);

	React.useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID))
	}, [dispatch, imdbID])

	return (
		<div className='movie-section'>
			<div className='section-left'>
				<div className='movie-title'>{data.Title}</div>
				<div className="movie-rating">
					<span>
						IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
					</span>
					<span>
						IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
					</span>
					<span>
						IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
					</span>
					<span>
						IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
					</span>
				</div>
			</div>
		</div>
	)
}

export default MovieDetail
