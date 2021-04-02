import fetch from 'node-fetch'

export default async (page) => {
  console.log(page);

  const query = `
  {
    projectContentCollection {
      items {
        id
        title
        route
        repo
        siteLink
        projectImage
        description
      }
    }
  }
  `

  try {
    await fetch(`https://graphql.contentful.com/content/v1/spaces/noefj5y57vr9/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer MTmSGOTdxvfPA7rRthSdqkZRyhmees_WMpcl_BBe9g4`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        page = data.projectContentCollection.items[0]
        console.log(data.projectContentCollection);
      });
  }
  catch {

  }
}