import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NoteAdd from '../NoteAdd/NoteAdd';
import NoteList from '../NoteList/NoteList';

import NoteTitle from '../NoteTitle/NoteTitle';
import NoteContent from '../NoteContent/NoteContent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React NoteApp v2.0</h2>
        </div>

        <div className="NoteAddList">
          <NoteAdd />

          <NoteList />
        </div>

        <div className="NoteTitleContent">
          <NoteTitle />
          
          <NoteContent />
        </div>

        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
