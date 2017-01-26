import React from 'react';
import createHistory from 'history/createBrowserHistory'
import Error from './Error';
import EventList from './EventList';
import EventIntroduction from './EventIntroduction';
import Participant from './Participant';
import Volunteer from './Volunteer';
import Pay from './Pay';
import Admin from './Admin';
import Confirm from './Confirm';
import './App.css';

const history = createHistory(); 

// const config = {
// 	apiKey: "AIzaSyB15dVeFNsq2AiVHfemX151uSFsoHTPOKU",
// 	authDomain: "pack1199-9d021.firebaseapp.com",
// 	databaseURL: "https://pack1199-9d021.firebaseio.com",
// 	storageBucket: "pack1199-9d021.appspot.com",
// 	messagingSenderId: "175402319965"
// };

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: <div>default</div>,
		};    
	}


	router = (location) => {
		let page = null;
		switch (location.pathname) {
			case "/":
				page = <EventList />;
				break;
			case "/introduction":
				page = <EventIntroduction />;
				break;
			case "/participant":
				page = <Participant />;
				break;
			case "/volunteer":
				page = <Volunteer />;
				break;
			case "/pay":
				page = <Pay />;
				break;
			case "/confirm":
				page = <Confirm />;
				break;
			case "/admin":
				page = <Admin />;
				break;
			default:
				page = <Error />;

			// case (location.pathname.match(/^\/one/) || {}).input:
			// 	page = <div>page one</div>;
			// 	break;

		}
		this.setState({page: page});
	}

	transition = event => {
		event.preventDefault();
		history.push({
			pathname: event.currentTarget.pathname,
			search: event.currentTarget.search
		});
	};

	componentWillMount() {
		this.router(history.location);
		history.listen((location, action) => {
			// console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
			// console.log(`The last navigation action was ${action}`);      
			this.router(location);
		});
	}

	render() {
		return (
			<div className="container" >
				<div className="col-sm-6 sidenav">
					<ul>
						<li><a href="/" onClick={this.transition}>Home</a></li>
						<li><a href="/introduction" onClick={this.transition}>Introduction</a></li>
						<li><a href="/participant" onClick={this.transition}>Participant</a></li>
						<li><a href="/pay" onClick={this.transition}>Pay</a></li>
						<li><a href="/volunteer" onClick={this.transition}>Volunteer</a></li>
						<li><a href="/confirm" onClick={this.transition}>Confirmation</a></li>
						<li><a href="/admin" onClick={this.transition}>Administration</a></li>
					</ul>
				</div>
				<div className="col-sm-6 main" >
					<p>{this.state.page}</p>
				</div>
			</div>
		);
	}
}

export default App;
