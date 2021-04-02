import './index.css'
import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import ProjectsPage from './pages/projects'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import LandingPage from './pages/projectPages/LandingPage'
import MovieAPI_Page from './pages/projectPages/MovieAPI_Page'
import DrumMachine from './pages/projectPages/DrumMachine'
import RandomQuote from './pages/projectPages/RandomQuote'
import TemplateTest from './pages/projectPages/TemplateTest'
import NotFoundPage from './pages/404'

function App() {
  // const query = `
  // {
  //   projectContentCollection {
  //     items {
  //       id
  //       title
  //       route
  //       repo
  //       siteLink
  //       projectImage
  //       description
  //     }
  //   }
  // }
  // `  
  // const [page, setPage] = useState(null);

  // useEffect(() => {
  //   window
  //   .fetch(`https://graphql.contentful.com/content/v1/spaces/noefj5y57vr9/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer MTmSGOTdxvfPA7rRthSdqkZRyhmees_WMpcl_BBe9g4`,
  //     },
  //     body: JSON.stringify({ query }),
  //   })
  //     .then((response) => response.json())
  //     .then(({ data, errors }) => {
  //       if (errors) {
  //         console.error(errors);
  //       }
  //       setPage(data.projectContentCollection.items)
  //       console.log(data.projectContentCollection);
  //     });
  // })

  // if (!page) {
  //   return "Loading...";
  // }

const page = []

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/projects" page={page} component={ProjectsPage} />
        <Route exact path="/template_test" page={page} component={TemplateTest} />
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
