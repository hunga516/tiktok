import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import SupportPage from './pages/Support'


function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>
    </>
  )
}

export default App;