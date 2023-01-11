import React from 'react'
import '../../commonResource/css/styles.css'
import iphoneseImg from '../../commonResource/images/home/iphoneSe.jpg'

export default function iphonese() {
  return (
    <div>
      <section className="iphone1">
		<div className="container">

			<div className="title-wraper bold">
				The Bset for the brightest. 
            </div> 
            <div>
                <img src={iphoneseImg} alt="" />
            </div>
        <div>
            <div className="title-wraper pro bold black">
				iPhone SE 
			</div> 
			<div>
                Lots to love. Less to spend.
            </div>
            <div>
                Starting at $399
                <br />
                From $9.54/mo. or $229 with trade-in.*
            </div>

			<div className="links-wrapper">
				<ul>
					<li><a href="/">Learn more</a></li>
					<li><a href="/">Order</a></li>
				</ul> 
			</div>
        </div>
			
		</div>
	</section>
    </div>
  )}
//   Lots to love. Less to spend.
// Starting at $399
// From $9.54/mo. or $229 with trade-in.*

