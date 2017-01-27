import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		// this.onSignOut = this.onSignOut.bind(this);
	}

	// onSignOut(e){
	// 	// console.log('submit');
	// 	e.preventDefault();
	// 	this.props.onSignOut(this.props.appModule);	
	// }

	render() {
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			  	<div className="navbar-header">
			      PACK 1199
			    </div>
			    {/*
			   	<img src="/imgs/cubscout.gif" alt="" height="60" /> 
			   	<img src="/imgs/tigercub200.png" alt="" height="60" /> 
			   	<img src="/imgs/wolf200.png" alt="" height="60" /> 
			   	<img src="/imgs/bear200.png" alt="" height="60" /> 
			   	<img src="/imgs/webelos200.png" alt="" height="60" /> 
			   	<img src="/imgs/082_300.png" alt="" height="60" /> 
			    
			    <div className="navbar-right">
				    <ul className="nav navbar-nav">
				      <li><a href="#">Sign Up</a></li>
				      <li><a href="#">Log In</a></li>
				    </ul>
			    </div>*/}
			  </div>
			</nav>
		);
	};
}
export default Header;