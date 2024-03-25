import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const name = <div>This is my expected result</div>

function App() {
  return (
    <div className="App">
      {name}
      <Navbar />
      <h1>Hello World</h1>
      <Footer />
      <Button title="Login" />
      <Button title="Register" />
    </div>
  );
}

export default App;
