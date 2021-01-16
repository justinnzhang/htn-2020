import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
