import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import DavidTeichmann from './pages/DavidTeichmann'
import SeaTurtleConservation from './pages/SeaTurtleConservation'
import ResearchArchive from './pages/ResearchArchive'
import Impact from './pages/Impact'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="david-teichmann" element={<DavidTeichmann />} />
          <Route path="conservation/sea-turtles" element={<SeaTurtleConservation />} />
          <Route path="research" element={<ResearchArchive />} />
          <Route path="impact" element={<Impact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
