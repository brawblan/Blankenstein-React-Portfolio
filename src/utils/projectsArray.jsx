import landingPageImage from '../assets/landingPage.png'
import apiImage from '../assets/apiProject.png'
import drumMachineImage from '../assets/drummachine.png'
import quoteGenImage from '../assets/randomQuote.png'

const projectsArr = [
  { 
    title: 'Landing Page', 
    src: landingPageImage, 
    route: 'LandingPage', 
    repo: 'book-landing',
    siteLink: 'https://book-landing.vercel.app',
  },
  { 
    title: 'Movie Poster API', 
    src: apiImage, 
    route: 'MovieAPI_Page', 
    repo: 'W8_API-Project' ,
    siteLink: '',
  },
  { 
    title: 'Drum Machine', 
    src: drumMachineImage, 
    route: 'DrumMachine', 
    repo: 'drum-machine' ,
    siteLink: '',
  },
  { 
    title: 'Random Quote Generator', 
    src: quoteGenImage, 
    route: 'RandomQuote', 
    repo: 'random-quote-generator' ,
    siteLink: '',
  },
]

export default projectsArr