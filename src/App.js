import React, { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';
import CardsDeck from './components/CardsDeck';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState({})
  const apiCall = async (urlpath) => {
    const response = await axios(urlpath);
    if (response.status == 200) setMovies(response.data.results)
  }

  useEffect(() => {
    apiCall(`https://api.themoviedb.org/3/trending/movie/week?api_key=fded687d14e48654e543b7ecfaea42cc`)
  }, [])
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        {
          Object.keys(movies).length
          ? <CardsDeck movies={movies} />
          : <Spinner />
        }
      </header>
    </div>
  );
}

export default App;
