import React, { Component } from 'react'

export default class SecOneAndTwo extends Component {
  render() {
	return (
	  <div>
		{/* <!-- First section starts here --> */}
	<section className="first-hightlight-wrapper">
		<div className="container">

			<div className="new-alert">
				New
			</div>

			<div className="title-wraper bold black">
				iPad Pro 
			</div> 

			<div className="links-wrapper">
				<ul>
					<li><a href="/">Learn more</a></li>
					<li><a href="/">Order</a></li>
				</ul> 
			</div>

			<div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div>
		</div>
	</section>
	{/* <!-- First section ends here --> */}

	{/* <!-- Second section starts here --> */}
	<section className="second-hightlight-wrapper">
		<div className="container">

			<div className="new-alert">
				New
			</div>

			<div className="title-wraper bold black">
				MacBook Air 
			</div> 

			<div className="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div className="price-wrapper grey">
				From $999.
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="/">Learn more</a></li>
					<li><a href="/">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
	  </div>
	)
  }
}
