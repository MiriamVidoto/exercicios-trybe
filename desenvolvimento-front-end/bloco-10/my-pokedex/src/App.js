import React from 'react';
import './App.css'
import Header from './Header';
import Card from './Card'

class App extends React.Component {
  render(){ 
    return (
      <div className="App">
        <Header />
        <Card className= 'card'/>
      </div>
    );
  }
}

export default App;
