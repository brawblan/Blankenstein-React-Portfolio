import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import ProjectsPage from './pages/projects'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import LandingPage from './pages/projectPages/LandingPage'
import MovieAPI_Page from './pages/projectPages/MovieAPI_Page'
import DrumMachine from './pages/projectPages/DrumMachine'
import RandomQuote from './pages/projectPages/RandomQuote'
import NotFoundPage from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/landing_page" component={LandingPage} />
        <Route exact path="/movie_api_page" component={MovieAPI_Page} />
        <Route exact path="/drum_machine" component={DrumMachine} />
        <Route exact path="/random_quote" component={RandomQuote} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
