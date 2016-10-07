import React, { Component } from 'react';
import ReactGA from 'react-ga'
import './App.css';
import Notifications from './notifications'

ReactGA.initialize('UA-85246703-1')


class Lol extends Component {
  state = {
    subValue: 'connection',
  }

  login = (e) => {
      e.preventDefault();
      this.setState({subValue: 'coucou'});
  }

  render() {
    const { subValue } = this.state;
    return (
        <div>
          <form onSubmit={this.login}>
            username<input type="text" name="username"/>
            password<input type="password" name="password"/>
            <input type="submit" value={subValue} />
          </form>
        </div>
    )
  }
}

class Pop extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="top-bar">
              <Notifications/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Pop />
          <br/>
          <Lol/>
      </div>
    );
  }
}
export default App;
