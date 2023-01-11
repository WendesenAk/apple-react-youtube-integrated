import React, { Component } from 'react'

export default class FooterLink extends Component {
  render() {

    return (
    <>
      {this.props.myData.map((item, i)=>{
      return (
		<div key={i}>
		<h3>{item.subtitle.title}</h3>
		<ul>
			{item.subtitle.links.map((link, i)=>{
				return (
				<li key={i}> <a href="/">{link}</a> </li>
				);
			})}
		</ul>
    </div>
	  )})}
    </>
    )
  }
}
