import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import Register from './components/Register';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/Dashboard" element={<><Navigation /><Dashboard /></>} />
      <Route path="/" element={<><SignIn /></>} />
      <Route path="/register" element={<><Register /></>} />
      <Route path="/patient" element={<><Navigation /><Patient /></>} />
      <Route path="/doctor" element={<><Navigation /><Doctor /></>} />
      {/* <Route path="/indidoctor" element={<><Navigation /><IndividualDoctor /></>} />
      <Route path="/indipatient" element={<><Navigation /><IndividualPatient /></>} /> */}
  
      </Routes>
    </div>
  );
}

export default App;
