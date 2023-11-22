import './App.css';
import GreetingPage from './greetingPage';
import Content from './content';
import IniteFreind from './inviteFr';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const candidateName = "Marah ";
  return (
<>

<div>
      <GreetingPage candidateName={candidateName} />
    </div>


  <Router>
      <Routes>
          <Route path="/inviteFr" Component={IniteFreind} />

          
      </Routes>
    </Router>
    </>
    );
}

export default App;
