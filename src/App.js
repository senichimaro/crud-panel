import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import { Home } from './pages/Home';

// security
import { Auth0ProviderWithHistory } from './auth/AuthProviderWithHistory'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App;
