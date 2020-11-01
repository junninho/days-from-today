import React from 'react';
import './App.css';
import { Input } from '../Input';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Days from today</h1>
        <Input />
      </div>
    );
  }
}