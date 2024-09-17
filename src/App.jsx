
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <>
    <div>
    <Navbar/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
