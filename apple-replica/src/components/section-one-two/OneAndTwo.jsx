// import React, { Component } from 'react'

// export default class OneAndTwo extends Component {
//   render() {
//     return (
//       <div>
        
//     {this.props.myList.map((data)=>{
//       return (
// 		<>
// 		{data}
// 		</>
//     )})}
//       </div>
//     )
//   }
// }
// ///parent component

// import React, { Component } from 'react'
// import Linkage from './Linkage'
// import OneAndTwo from './OneAndTwo';
// import SectionOneAndTwoData from './SectionOneAndTwoData'

// export default class SecOneAndTwo extends Component {
// render() {
// 	console.log(SectionOneAndTwoData);
// 	// let data = this.props;  //			{FootData.map((data)=>{

//     return (
//     <> 
// 	{SectionOneAndTwoData.map((data) => {
// return (
// 	<>
// <section className={data.classNames}>
// 	<OneAndTwo myList={data} />
// 		<div className="container">
//         {data.condition ? <div className="new-alert">New</div> : undefined}
		
// 		<div className="title-wraper bold black">{data.product}</div> 

// 		<div className="links-wrapper"><Linkage /></div>

// 		<div className="ipod-caption row">
// 		<div className="col-sm-12 col-md-6 text-md-right">{data.advert}</div>
// 		{/* <div className="col-sm-12 col-md-6 text-md-left">{element.advert2}</div> */}
// 		</div>
// 		{/* <div className="price-wrapper grey">{element.price}</div> */}
// 		</div>
// </section>
// </>
// )
// })}   
// </>
// )
// }
// }
