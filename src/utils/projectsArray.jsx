import landingPageImage from '../assets/landingPage.png'
import apiImage from '../assets/apiProject.png'
import drumMachineImage from '../assets/drummachine.png'
import quoteGenImage from '../assets/randomQuote.png'

const projectsArr = [
  { 
    title: 'Landing Page', 
    src: landingPageImage, 
    route: 'landing_page', 
    repo: 'book-landing',
    siteLink: 'https://book-landing.vercel.app',
  },
  { 
    title: 'Movie Poster API', 
    src: apiImage, 
    route: 'movie_api_page', 
    repo: 'W8_API-Project' ,
    siteLink: '',
  },
  { 
    title: 'Drum Machine', 
    src: drumMachineImage, 
    route: 'drum_machine', 
    repo: 'drum-machine' ,
    siteLink: '',
  },
  { 
    title: 'Random Quote Generator', 
    src: quoteGenImage, 
    route: 'random_quote', 
    repo: 'random-quote-generator' ,
    siteLink: '',
  },
]

export default projectsArr