import './App.css';
import GreetingPage from './greetingPage';
import IniteFriend from './inviteFr';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aproval from './aproval';
import Screen from './screen';

function App() {
  return (
<>
  <Router>
      <Routes>
      <Route  exact path="/" Component={GreetingPage} />

      <Route  exact path="/aproval" Component={Aproval} />   


          <Route path="/inviteFr" Component={IniteFriend} />
          <Route  exact path="/screen" Component={Screen} />

          
      </Routes>
    </Router>
    </>
    );
}

export default App;
