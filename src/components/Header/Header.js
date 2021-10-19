import React from 'react'
// React-router-dom
import { Link } from 'react-router-dom'
// SVG
import GlobalSvg from '../../common/SVG/GlobalSvg'
// Styled
import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<div className="logo">Кинопоиск</div>
			</Link>

			<div className="user-image">
				<GlobalSvg id='user' />
			</div>
		</div>
	)
}

export default Header
