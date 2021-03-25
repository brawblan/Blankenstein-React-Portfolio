// import { React, useState, useEffect } from 'react'
// import TemplateTest from './TemplateTest';

// const Contentful = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [state, setState] = useState(null)
//   const query = `
//   {
//     projectContentCollection {
//       items {
//         id
//         title
//         route
//         repo
//         siteLink
//         projectImage
//         description
//       }
//     }
//   }
//   `

//   useEffect(() => {
//     fetch(`https://graphql.contentful.com/content/v1/spaces/noefj5y57vr9/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer MTmSGOTdxvfPA7rRthSdqkZRyhmees_WMpcl_BBe9g4`,
//       },
//       body: JSON.stringify({ query }),
//     })
//     .then((res) => res.json())
//     .then(({ data, errors }) => {
//       if (errors) {
//         setError(errors)
//         setIsLoaded(true)
//         console.error(errors);
//       }
//       setState(data.projectContentCollection)
//     })
//   }, []);

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//     return (
//       <>
//       {state.map((item) => (
//         <TemplateTest id={item.id} title={item.title} />
//       ))}
//       </>
//     )
//   }
// }

// export default Contentful