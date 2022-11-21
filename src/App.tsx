import './App.css'
import About from './components/About'
import Profile from './components/Profile'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className="container">
        <Profile />
        <About />
        <Interests />
        <Footer />
    </div>
  )
}
