import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import { Home } from './pages/Home';
import { Private } from './pages/Private';

// security
import { Auth0ProviderWithHistory } from './auth/AuthProviderWithHistory'
import { ProtectedRoute } from './auth/ProtectedRoute';

// routes
import { routes } from './routes'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path={routes[0].path} element={<Home/>} ></Route>
          <Route path={routes[1].path} element={<ProtectedRoute element={Private}/>}></Route>
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App;
