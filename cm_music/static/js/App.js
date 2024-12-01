import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Music from './Music'
import Bio from './Bio'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/bio" component={ Bio } />
      <Route path="/music" component={ Music } />
    </Switch>
  </Router>
)

export default App
