import React from 'react'
import { Link } from 'react-router-dom'
import GlobalSvg from '../../common/SVG/GlobalSvg'

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
