import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './component/Posts';
import PostForm from './component/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PostForm/>
          <hr/>
          <Posts/>
        </header>
      </div>
    );
  }
}

export default App;
