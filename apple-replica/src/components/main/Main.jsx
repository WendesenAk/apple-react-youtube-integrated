import React, { Component } from 'react'
import AppleTv from '../../commonResource/images/icons/apple-tv-logo.png'
import Banker from '../../commonResource/images/home/banker.png'
import WatchS5 from '../../commonResource/images/icons/watch-series5-logo.png'
import Arcade from '../../commonResource/images/icons/arcade.png'


export default class Main extends Component {
  render() {
    return (
      <div>

	<section className="third-hightlight-wrapper">
		<div className="container">
			<div className="title-wraper bold">
				iPhone 11 Pro 
			</div> 

			<div className="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			</div>

			<div className="price-wrapper">
				From $24.95/mo. or $599 with trade‑in.
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="/">Learn more</a></li>
					<li><a href="/">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
	{/* <!-- Third section ends here --> */}

	{/* <!-- Fourth section starts here --> */}
	
	<div className="fourth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="title-wraper">
							iPhone 11 
						</div> 
						<div className="description-wraper">
							Just the right amount of everything.
						</div>
						<div className="price-wrapper">
							From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
						</div>

						<div className="links-wrapper">
							<ul>
								<li><a href="/">Learn more</a></li>
								<li><a href="/">Apply now</a></li>
							</ul> 
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper white">
							Get the latest CDC response to COVID-19. 
						</div> 

						<div className="links-wrapper white">
							<ul>
								<li><a href="/">Watch the PSA</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</div>

	{/* <!-- Fourth section ends here --> */}

	{/* <!-- Fifth section starts here --> */}
	<section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={AppleTv} />
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={Banker} />
						</div>

						<div className="watch-more-wrapper">
							<a href="#/">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={WatchS5} />
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br />
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/">Learn more</a></li>
								<li><a href="/">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
	{/* <!-- Fifth section ends here --> */}

	{/* <!-- Sixth section starts here --> */}
	<section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={Arcade} />
							</div>
						</div>
						<div className="description-wraper white">
							Agent 8 is a small hero on a big mission.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/">Play now<sup>2</sup></a></li>
								<li><a href="/">Learn about Apple Arcade</a></li>
							</ul> 
						</div>						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper">
							Apple Card Monthly Installments 
						</div> 
						<div className="description-wraper">
							Pay for your next iPhone over time, interest-free with Apple Card.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/">Learn more</a></li>
								<li><a href="/">Apply now</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
	</div>

)
}
}

