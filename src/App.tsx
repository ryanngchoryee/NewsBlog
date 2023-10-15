import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Home} exact path="/home" />
      </Switch>
    </Router>
  )
}
export default App;
