import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
      <div>
        <ul>
        <li>
        <a href="/">Learn More</a>
        </li>
        <li>
        {this.props.Order ? <a href='/'>Order</a>: <a href='/'>Buy</a> }
        </li>
        </ul>
      </div>
    )
  }
}
