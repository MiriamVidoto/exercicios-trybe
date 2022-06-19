import logo from './logo.svg';
import './App.css';
import Image from './Image';
import List from './List';

function App() {
  return (
    <div className="App">
        <List />
        <Image source={logo} alternativeText="Logo React" />
    </div>
  );
}

export default App;
