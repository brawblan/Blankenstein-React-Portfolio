import { React, useState, useEffect } from "react"

const query = `
{
  nameCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`

function Contentful() {

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.nameCollection.items[0]);
      });
  }, [])

// show a loading screen case the data hasn't arrived yet
  if (!page) {
    return "Loading...";
  }

  return (
    <>
      {/* <NavBar />
      <div className="project-page">

        <div className="project-picture-and-description">
          <Link
            to={'/projects'}
            className="go-back-btn"
            onMouseOver={() => addHoverClass()}
            onMouseLeave={() => removeHoverClass()}
          >
            <FontAwesomeIcon 
              icon={faArrowAltCircleLeft} 
              className="left-arrow" 
              pulse={isHover}
            />
            Go Back to Projects
          </Link>
          <img src={landingPageImage} alt="" width="600" height="300" />
          <GitHubBtn repo='book-landing' />
          <div className="project-description">
            <h3>Project Brief</h3>
            <p>
              This website was built using the NextJS framework as a landing page for a very successful book launch.
            </p>
            <p>
              This was my first freelance project so there were new challenges to face. Some those included working with a team, having a strict deadline, and working with an email capture API.
            </p>
            <p>
              I really enjoyed working with a designer who provided all assets and mockups. It gave me a chance to focuse solely on building the website and implementing the requirements.
            </p>
          </div>
        </div>

        <div className="project-link-and-tech">
          <div className="project-link">
            <h4>Visit Website</h4>
            <WebsiteLinkBtn title='Landing Page' />
          </div>
          <div className="project-tech">
            <h4>Tech Used</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

      </div>
      <Footer /> */}
    </>
  )
}

export default Contentful
