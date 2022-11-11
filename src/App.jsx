import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { get } from "./services"
import Card from './components/Card';
import { Description } from '@mui/icons-material';

function App() {
  const [title, setTitle] = useState("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/assets/american_history_x.");
  const [titles, setTitles] = useState([]);
  const [movies, setMovies] = useState([]);


  async function getMovies() {
    const movies = await get();
    setMovies(movies.entries);
    console.log(movies)
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div >
      <h1>Popular Movies</h1>
      <input></input>
      <div className='row'>
      {movies?.map((movie, index) => (
        <Card key={index} pelicula={movie}/>
      ))}
      
      </div>
      
    </div>
  )
}

export default App
