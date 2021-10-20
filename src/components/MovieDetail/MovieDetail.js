import React from 'react'
// React-router-dom
import { useParams } from 'react-router'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchAsyncMovieOrShowDetail,
	getSelectMovieOrShow,
	removeSelectMovieOrShow,
} from '../../function/movies/movieSlice'
// Style
import './MovieDetail.scss'

const MovieDetail = () => {
	const { imdbID } = useParams()
	const dispatch = useDispatch()
	const data = useSelector(getSelectMovieOrShow)

	React.useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID))

		return () => {
			dispatch(removeSelectMovieOrShow())
		}
	}, [dispatch, imdbID])

	return (
		<div className='movie-section'>
			{Object.keys(data).length === 0 ? (
				<div>...Loading</div>
			) : (
				<>
					<div className='section-left'>
						<div className='movie-title'>{data.Title}</div>
						<div className='movie-rating'>
							<span>
								IMDB Rating <i className='bx bxs-star'></i> : {data.imdbRating}
							</span>
							<span>
								IMDB Votes <i className='bx bxs-like'></i> : {data.imdbVotes}
							</span>
							<span>
								Runtime <i className='bx bx-film'></i> : {data.Runtime}
							</span>
							<span>
								Year <i className='bx bx-calendar'></i> : {data.Year}
							</span>
						</div>
						<div className='movie-plot'>{data.Plot}</div>
						<div className='movie-info'>
							<div>
								<span>Director: </span>
								<span>{data.Director}</span>
							</div>
							<div>
								<span>Stars: </span>
								<span>{data.Actors}</span>
							</div>
							<div>
								<span>Generes: </span>
								<span>{data.Genere}</span>
							</div>
							<div>
								<span>Languages: </span>
								<span>{data.Language}</span>
							</div>
							<div>
								<span>Awards: </span>
								<span>{data.Awards}</span>
							</div>
						</div>
					</div>
					<div className='section-right'>
						<img src={data.Poster} alt={data.Title} />
					</div>
				</>
			)}
		</div>
	)
}

export default MovieDetail
