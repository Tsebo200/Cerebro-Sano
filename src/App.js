import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignUp';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import IndividualDoctor from './components/IndividualDoctor';
import IndividualPatient from './components/IndividualPatient';
import Register from './components/Register';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<><Home /></>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/patient" element={<><Patient /></>} />
      <Route path="/doctor" element={<><Navigation /><Doctor /></>} />
      <Route path="/indidoctor" element={<><Navigation /><IndividualDoctor /></>} />
      <Route path="/indipatient" element={<><Navigation /><IndividualPatient /></>} />
  
      </Routes>
    </div>
  );
}

export default App;
