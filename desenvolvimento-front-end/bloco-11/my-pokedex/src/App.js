import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Card from './componentes/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />
      </div>
    );
  }  
}

export default App;
