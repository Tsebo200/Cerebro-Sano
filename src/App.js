import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp />} />
  
      </Routes>
    </div>
  );
}

export default App;
