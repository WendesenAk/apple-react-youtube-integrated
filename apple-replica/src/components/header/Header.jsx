import React, { Component } from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png'
import HeaderLink from './HeaderLink'
import { Link } from 'react-router-dom'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'

export default class Header extends Component {
  render() {
    return (
    <div>
    <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			☰
			</button>
			<Link className="navbar-brand mx-auto" to="/">
				<img src={logo} alt="apple" /></Link>

			<div className="navbar-collapse collapse">
			<ul className="navbar-nav nav-justified w-100 nav-fill">
					
					<HeaderLink url="/mac/" link="Mac" />
					<HeaderLink url="/iphone/" link="iphone" />
					<HeaderLink url="/ipad/" link="ipad" />
					<HeaderLink url="/watch/" link="watch" />
					<HeaderLink url="/tv/" link="tv" />
					<HeaderLink url="/Music/" link="Music" />
					<HeaderLink url="/Support/" link="Support" />
					<li className='nav-item'>
					<Link className='nav-link js-scroll-trigger' to="/">
						<img src={search} alt="search" />
					</Link>  
                    </li>
					<li className='nav-item'>
					<Link className='nav-link js-scroll-trigger' to="/">
						<img src={cart} alt="search" />
					</Link>  
                    </li>
			</ul>
			</div>
			</nav>
		</div>
	</div>
    </div>
    )
}
}
