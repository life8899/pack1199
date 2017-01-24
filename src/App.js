import React from 'react';
import createHistory from 'history/createBrowserHistory'

const history = createHistory(); 



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: "Hello"};    
  }


  router = (location) => {
    this.setState({title: location.pathname});
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
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
      console.log(`The last navigation action was ${action}`);      
      this.router(location);
    });
  }

  render() {
    return (
      <div>
      <ul>
        <li><a href="/" onClick={this.transition}>Home</a></li>
        <li><a href="/one" onClick={this.transition}>One</a></li>
        <li><a href="/two" onClick={this.transition}>Two</a></li>
      </ul>
      <p>{this.state.title}</p>
      </div>
    );
  }
}

export default App;
