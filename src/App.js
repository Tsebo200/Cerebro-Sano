import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import IndividualDoctor from './components/IndividualDoctor';
import IndividualPatient from './components/IndividualPatient';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<><Navigation /><Home /></>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/patient" element={<><Navigation /><Patient /></>} />
      <Route path="/doctor" element={<><Navigation /><Doctor /></>} />
      <Route path="/indidoctor" element={<><Navigation /><IndividualDoctor /></>} />
      <Route path="/indipatient" element={<><Navigation /><IndividualPatient /></>} />
  
      </Routes>
    </div>
  );
}

export default App;
