import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages'
import ProjectsPage from './pages/projects'
import ContactPage from './pages/contact'
import NotFoundPage from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/pages/home']} component={HomePage} />
        <Route exact path="/pages/projects" component={ProjectsPage} />
        <Route exact path="/pages/contact" component={ContactPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
