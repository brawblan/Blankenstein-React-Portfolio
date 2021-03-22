import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages'
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
        <Route exact path={['/', '/pages/home']} component={HomePage} />
        <Route exact path="/pages/projects" component={ProjectsPage} />
        <Route exact path="/pages/about" component={AboutPage} />
        <Route exact path="/pages/contact" component={ContactPage} />
        <Route exact path="/pages/projectPages/LandingPage" component={LandingPage} />
        <Route exact path="/pages/projectPages/MovieAPI_Page" component={MovieAPI_Page} />
        <Route exact path="/pages/projectPages/DrumMachine" component={DrumMachine} />
        <Route exact path="/pages/projectPages/RandomQuote" component={RandomQuote} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

// import projectsArr from './assets/projectsArray'
// {/* {projectsArr.map(({ title, src, route, repo }) => {
// return (
//   <Route
//     exact path={`/pages/projectPages/${route}`} 
//     component={route}
//     // src={src}
//     // repo={repo}
//     // key={title}
//   />
// )})
// } */}
