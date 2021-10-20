import React from 'react'
// React-router-dom
import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../function/movies/movieSlice'
// SVG
import GlobalSvg from '../../common/SVG/GlobalSvg'
// Styled
import './Header.scss'

const Header = () => {
	const [term, setTerm] = React.useState('')
	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		if (term === '') return alert('Введите название фильма!!!')
		dispatch(fetchAsyncMovies(term))
		dispatch(fetchAsyncShows(term))
		setTerm('')
	}

	return (
		<div className='header'>
			<div className='logo'>
				<Link to='/'>Кинопоиск</Link>
			</div>
			<div className='search-bar'>
				<form onSubmit={submitHandler}>
					<input
						type='text'
						value={term}
						placeholder='Поиск фильмов или сериалов'
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button type='submit'>
						<i className='bx bx-search-alt'></i>
					</button>
				</form>
			</div>
			<div className='user-image'>
				<GlobalSvg id='user' />
			</div>
		</div>
	)
}

export default Header
